import {test} from '@playwright/test'
import { RegisterPage } from '../../pages/RegisterPage'
import { TransferFundsPage } from '../../pages/TransferFundsPage'
import { OpenAccountPage } from '../../pages/OpenAccountPage'
import { generateUser } from '../../utils/dataGenerator'

const user=generateUser()
test('@smoke transfer funds',async({page})=>{
    const register=new RegisterPage(page)
    const account=new OpenAccountPage(page)
    const transfer=new TransferFundsPage(page)

    //register
    await register.openRegisterPage()
    await register.fillDetails(user)
    await register.fillCredentials(user.username, user.password)
    await register.submitRegister()
    await register.validateRegistration()

    //create account 1
    await account.openAccount()
    await account.createAccount('CHECKING')

    //create account 2
    await account.openAccount()
    await account.createAccount('SAVINGS')

    //open transfer page
    await transfer.openTransfer()
    const ids=await transfer.transferFunds()

    await transfer.validateTransfer()
    console.log('Transfer successful:',ids);
    

})