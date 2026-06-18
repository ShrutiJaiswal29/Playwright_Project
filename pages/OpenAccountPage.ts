import { expect, Page } from '@playwright/test'

export class OpenAccountPage {
    constructor(page: Page) {
        this.page = page
        this.accountType = '#type'
        this.submitButton = 'input[value="Open New Account"]'
        this.newAccountId = 'p:has-text("Your new account number:") a'
        this.accountConfirmation = 'h1:has-text("Account Opened!")'
    }

    async openAccount() {
        await this.page.getByRole('link', { name: 'Open New Account' }).click()
    }

    async createAccount(type = 'CHECKING') {
        await this.page.locator(this.accountType).waitFor({ state: 'visible' })
        await this.page.locator(this.accountType).selectOption({ label: type })
        await this.page.locator(this.submitButton).click()
        await expect(this.page.locator(this.accountConfirmation)).toBeVisible({ timeout: 10000 })

        const newId = (await this.page.locator(this.newAccountId).innerText()).trim()
        console.log('New Account ID:', newId)
        return newId
    }

    async validateAccount() {
        await expect(this.page).toHaveURL(/openaccount\.htm/)
        await expect(this.page.locator(this.accountConfirmation)).toBeVisible({ timeout: 10000 })
        await this.page.screenshot({ path: 'screenshots/openAccount/openAccount.png' })
    }
}
