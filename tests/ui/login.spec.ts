import {test,expect} from '@playwright/test'
import {LoginPage} from '../../pages/LoginPage'
import userData from '../../test-data/userData.json'

test('@smoke login with valid credentials',async({page})=>{
    const login=new LoginPage(page)
    await login.openLogin()
    await login.login(userData.username,userData.password)
    await login.validateLogin()
})

test('@regression login with wrong password shows error',async({page})=>{
    const login=new LoginPage(page)
    await login.openLogin()
    await login.login('john','wrongpass')
    await expect(page.getByText('The username and password could not be verified')).toBeVisible()
    console.log('Error message shown correctly');
    await page.screenshot({
        path:'screenshots/login/login_fail.png'
    })
    
})