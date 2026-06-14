import {expect,Page} from '@playwright/test'
export class LoginPage{
constructor(page:Page){
  this.page=page
  this.username='input[name="username"]'
  this.password='input[name="password"]'
}

async openLogin(){
  await this.page.goto('https://parabank.parasoft.com/')
}

async login(username:string,password:string){
  await this.page.locator(this.username).fill(username)
  await this.page.locator(this.password).fill(password)
  await this.page.getByRole('button',{name:'Log In'}).click()
}

async validateLogin(){
await expect(this.page).toHaveURL(/overview\.htm/)
console.log('Login successful')

await this.page.screenshot({path:'screenshots/login/login.png'})

}

}

