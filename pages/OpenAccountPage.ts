import {expect, Page} from '@playwright/test'

export class OpenAccountPage{
    constructor(page: Page){
        this.page = page
        // this.openAccountLink = 'a[href="openaccount.htm"]'
        this.accountType = '#type'
        this.submitButton = 'input[value="Open New Account"]'
        this.newAccountId = '#newAccountId'
    }

    async openAccount(){
        await this.page.getByRole('link',{name:'Open New Account'}).click()
    }

    async createAccount(type = 'CHECKING'){
        await this.page.locator(this.accountType).waitFor()
        await this.page.locator(this.accountType).selectOption(type)
        await this.page.locator(this.submitButton).click()
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForLoadState('networkidle')
        const newId = (await this.page.locator(this.newAccountId).innerText()).trim()
        console.log('New Account ID:', newId)
        return newId
    }

    async validateAccount(){
        await expect(this.page).toHaveURL(/openaccount\.htm/)
        await this.page.screenshot({path: 'screenshots/openAccount/openAccount.png'})
    }
}
