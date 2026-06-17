import {test,expect} from '@playwright/test'
import {LoginPage} from '../../pages/LoginPage'
import userData from '../../test-data/userData.json'

test('@smoke login with valid credentials',async({page})=>{
    const login=new LoginPage(page)
    await login.openLogin()
    await login.login(userData.username,userData.password)
    await login.validateLoginSuccess()

    await page.screenshot({
        path:'screenshots/login/login_success.png'
    })
})

test('@regression login with wrong password shows error',async({page})=>{
    const login=new LoginPage(page)
    await login.openLogin()
    await login.login(userData.username,userData.invalidPassword)

    await login.validateLoginError()

    await page.screenshot({
        path:'screenshots/login/login_fail.png'
    })
    
})