import {expect, Page} from '@playwright/test'

export class AccountsOverviewPage{
    constructor(page:Page){
        this.page=page
    }

    async openAccountsOverview(){
        await this.page.getByRole('link',{name:'Accounts Overview'}).click()
    }

    async validateOverview(){
        await expect(this.page).toHaveURL(/overview\.htm/)
        console.log('Accounts Overview Loaded');
        await this.page.screenshot({
            path:'screenshots/accountOverview/accountOverview.png'
        })   
    }
}