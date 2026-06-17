import {test} from '@playwright/test'
import { RegisterPage } from '../../pages/RegisterPage'
import { OpenAccountPage } from '../../pages/OpenAccountPage'
import { AccountsOverviewPage } from '../../pages/AccountsOverviewPage'
import { generateUser } from '../../utils/dataGenerator'

const user=generateUser()

test('@regression accounts Overview',async({page})=>{
    const register=new RegisterPage(page)
    const account=new OpenAccountPage(page)
    const overview=new AccountsOverviewPage(page)

    await register.openRegisterPage()
    await register.fillDetails(user)
    await register.fillCredentials(user.username,user.password)

    await register.submitRegister()
    await register.validateRegistration()

    await account.openAccount()
    await account.createAccount('CHECKING')

    await overview.openAccountsOverview()
    await overview.validateOverview()

})

