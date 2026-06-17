import {expect, Page} from '@playwright/test'

export class RegisterPage{
    constructor(page: Page){
        this.page = page
        this.firstName = '#customer\\.firstName'
        this.lastName = '#customer\\.lastName'
        this.address = '#customer\\.address\\.street'
        this.city = '#customer\\.address\\.city'
        this.state = '#customer\\.address\\.state'
        this.zipCode = '#customer\\.address\\.zipCode'
        this.phoneNumber = '#customer\\.phoneNumber'
        this.ssn = '#customer\\.ssn'
        this.username = '#customer\\.username'
        this.password = '#customer\\.password'
        this.confirm = '#repeatedPassword'
    }

    async openRegisterPage(){
        await this.page.goto('/parabank/register.htm')
    }

    async fillDetails(userData){
        await this.page.locator(this.firstName).fill(userData.firstName)
        await this.page.locator(this.lastName).fill(userData.lastName)
        await this.page.locator(this.address).fill(userData.address)
        await this.page.locator(this.city).fill(userData.city)
        await this.page.locator(this.state).fill(userData.state)
        await this.page.locator(this.zipCode).fill(userData.zipCode)
        await this.page.locator(this.phoneNumber).fill(userData.phone)
        await this.page.locator(this.ssn).fill(userData.ssn)
    }

    async fillCredentials(username: string, password: string){
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.confirm).fill(password)
    }

    async submitRegister(){
        await this.page.getByRole('button', {name: 'Register'}).click()
    }

    async validateRegistration(){
        await expect(this.page.locator('h1.title')).toBeVisible()
        await expect(this.page.getByRole('link',{name:'open new account'})).toBeVisible()
        console.log('Registration successful')
        await this.page.screenshot({path: 'screenshots/register/register.png'})
    }
}
