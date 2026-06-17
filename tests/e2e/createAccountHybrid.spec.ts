import {test, expect} from '../../fixtures//apiFixture'
import {RegisterPage} from '../../pages/RegisterPage'
import {OpenAccountPage} from '../../pages/OpenAccountPage'
import {generateUser} from '../../utils/dataGenerator'
import userData from '../../test-data/userData.json'
const user = generateUser()

test('@e2e @smoke create account ui and validate api', async({page, request,baseUrl}) => {
    const register = new RegisterPage(page)
    const account = new OpenAccountPage(page)

    await register.openRegisterPage()
    await register.fillDetails(user)
    await register.fillCredentials(user.username, user.password)
    await register.submitRegister()
    await register.validateRegistration()

    await account.openAccount()
    await account.createAccount('SAVINGS')

    //get the customer account
    const listRes = await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`, 
    {
        headers: 
        {
        Accept: 'application/json'
    }
    })

    const accounts = await listRes.json()
    const newAccountId = accounts[accounts.length - 1].id.toString()
    console.log('Account id from API:', newAccountId)

    //get details of that account
    const response = await request.get(`${baseUrl}/accounts/${newAccountId}`, 
    {
        headers:
        {
        Accept: 'application/json'
    }
    })
    console.log('API status:', response.status())
    const body = await response.json()
    console.log('Body:',body);
    
    expect(response.status()).toBe(200)
    expect(['SAVINGS','CHECKING','LOAN']).toContain(body.type)
    
    expect(typeof body.balance).toBe('number')
    console.log('Hybrid Test Passed - type:', body.type)
})