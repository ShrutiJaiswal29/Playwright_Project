import {test,expect} from '@playwright/test'

import { RegisterPage } from '../../pages/RegisterPage'
import { OpenAccountPage } from '../../pages/OpenAccountPage'
import { generateUser } from '../../utils/dataGenerator'
import {TransferFundsPage} from '../../pages/TransferFundsPage'

const user=generateUser()

test('@regression transfer with blank fields',async({page})=>{
    const register=new RegisterPage(page)
    const account=new OpenAccountPage(page)
    const transfer=new TransferFundsPage(page)

    await register.openRegisterPage()

    await register.fillDetails(user)
    await register.fillCredentials(user.username,user.password)

    await register.submitRegister()
    await register.validateRegistration()

    await account.openAccount()
    await account.createAccount('SAVINGS')
    
    await page.getByRole('link',{name:'Transfer Funds'}).click()
    await page.waitForURL((/transfer\.htm/))

    await page.locator('input#amount').fill('')

    await page.locator('select#fromAccountId').selectOption({index:0})
    await page.locator('select#toAccountId').selectOption({index:0})

    await page.locator('input[value="Transfer"]').click()

    await expect(page.getByText('Transfer Complete!')).not.toBeVisible()
    console.log('Negative test passed');

    await page.screenshot({path:'screenshots/negativeTransfer/negative_transfer.png'})
})

