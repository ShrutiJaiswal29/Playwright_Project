import {test} from '@playwright/test'
import { RegisterPage } from '../../pages/RegisterPage'
import { TransferFundsPage } from '../../pages/TransferFundsPage'
import { OpenAccountPage } from '../../pages/OpenAccountPage'
//import userData from '../../test-data/userData.json'
import { generateUser } from '../../utils/dataGenerator'
// const randomNumber=Date.now()
// const username=`user${randomNumber}`
// const password='Test@123'

const user=generateUser()
test('@smoke transfer funds',async({page})=>{
    const register=new RegisterPage(page)
    const account=new OpenAccountPage(page)
    const transfer=new TransferFundsPage(page)

    await register.openRegisterPage()
    await register.fillDetails(user)
    await register.fillCredentials(user.username, user.password)

    await register.submitRegister()
    await register.validateRegistration()
    await account.openAccount()
    await account.createAccount('SAVINGS')
  
    await transfer.openTransfer()
    await transfer.transferFunds()
    await transfer.validateTransfer()

})