import {test, expect} from '@playwright/test'
import {RegisterPage} from '../../pages/RegisterPage'
import {OpenAccountPage} from '../../pages/OpenAccountPage'
import {generateUser} from '../../utils/dataGenerator'

const user = generateUser()

test('@smoke @regression create account', async({page}) => {
    const register = new RegisterPage(page)
    const account = new OpenAccountPage(page)

    await register.openRegisterPage()
    await register.fillDetails(user)
    await register.fillCredentials(user.username, user.password)
    await register.submitRegister()
    await register.validateRegistration()

    await account.openAccount()
    const newAccountId = await account.createAccount('CHECKING')
    await account.validateAccount()

    console.log('Account created with ID:', newAccountId)
})
