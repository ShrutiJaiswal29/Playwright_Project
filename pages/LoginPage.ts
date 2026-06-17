import { expect, Page } from '@playwright/test'

export class LoginPage {

constructor(page: Page) {

this.page = page

this.username='input[name="username"]'

this.password='input[name="password"]'

this.loginButton='input[value="Log In"]'

this.errorMessage='p.error'

}

async openLogin(){

await this.page.goto('/')

}

async login(
username:string,
password:string
){

await this.page
.locator(this.username)
.fill(username)

await this.page
.locator(this.password)
.fill(password)

await this.page
.locator(this.loginButton)
.click()

}

async validateLoginSuccess(){

await expect(
this.page
).toHaveURL(
/overview.htm/
)

console.log(
'Login successful'
)

await this.page.screenshot({
path:'screenshots/login/login.png'
})

}

async validateLoginError(){

await expect(
this.page
.locator(this.errorMessage)
).toBeVisible()

console.log(
'error message shown correctly'
)

await this.page.screenshot({
path:'screenshots/login/login_fail.png'
})

}

}

