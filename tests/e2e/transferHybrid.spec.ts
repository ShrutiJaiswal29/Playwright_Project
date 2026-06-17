import {test, expect} from '../../fixtures/apiFixture'
import {RegisterPage} from '../../pages/RegisterPage'
import {OpenAccountPage} from '../../pages/OpenAccountPage'
import {generateUser} from '../../utils/dataGenerator'

const user = generateUser()

test('@e2e @regression transfer via UI then validate balance via API', async({page, request,baseUrl}) => {
    const headers={
        Accept: 'application/json'
    }
    //ui transfer
    const register = new RegisterPage(page)
    const account = new OpenAccountPage(page)

    await register.openRegisterPage()
    await register.fillDetails(user)
    await register.fillCredentials(user.username, user.password)
    await register.submitRegister()
    await register.validateRegistration()

    await account.openAccount()
    await account.createAccount('CHECKING')

    await account.openAccount()
    await account.createAccount('SAVINGS')

    await page.getByRole('link', {name: 'Transfer Funds'}).click()
    await page.waitForURL(/transfer\.htm/)
    await page.waitForLoadState('networkidle')

    const allOptions = await page.locator('select#fromAccountId option').all()
    console.log('Total accounts in dropdown:', allOptions.length)

    const fromId = await allOptions[0].getAttribute('value')
    const toId = await allOptions[allOptions.length - 1].getAttribute('value')
    console.log('From:', fromId, 'To:', toId)

    const amount = 100
    //api balance validation
    const fromBefore = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
    const toBefore = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
    console.log('Before - from:', fromBefore, 'To:', toBefore)

    await page.locator('select#fromAccountId').selectOption({value: fromId})
    await page.locator('select#toAccountId').selectOption({value: toId})
    await page.locator('input#amount').fill(String(amount))
    await page.locator('input[value="Transfer"]').click()

    await expect(page.getByText('Transfer Complete!')).toBeVisible()
    console.log('Transfer Complete!')

    const fromAfter = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
    const toAfter = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
    console.log('After - from:', fromAfter, 'To:', toAfter)

    // FR-08: Transfer Complete shown
    // FR-06/07: balance changed (total sum same)
    const totalBefore = fromBefore + toBefore
    const totalAfter = fromAfter + toAfter
    expect(totalAfter).toBe(totalBefore)
    console.log('Hybrid transfer passed - total balance consistent')
})
