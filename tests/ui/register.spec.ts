import {test} from '@playwright/test'
import {RegisterPage} from '../../pages/RegisterPage'
import { generateUser } from '../../utils/dataGenerator'

const user=generateUser()

test('@smoke register user',async({page})=>{

const register=new RegisterPage(page)
 await register.openRegisterPage()
 await register.fillDetails(user)
 await register.fillCredentials(user.username,user.password)
 await register.submitRegister()
 await register.validateRegistration()

})