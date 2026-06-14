import {expect,Page} from '@playwright/test'
import userData from '../test-data/userData.json'

export class TransferFundsPage{
    constructor(page:Page){
        this.page=page
       // this.transferLink='text=Transfer Funds'
        this.amount='input[id="amount"]'
        this.fromAccount='select[id="fromAccountId"]'
        this.toAccount='select[id="toAccountId"]'
        this.transferButton='input[value="Transfer"]'
    }

    async openTransfer(){
        await this.page.getByRole('link',{name:'Transfer Funds'}).click()
        await this.page.waitForURL(/transfer\.htm/)
    }
    async transferFunds(){
        await this.page.locator(this.amount).fill(userData.transferAmount.toString())
        await this.page.locator('select#fromAccountId').selectOption({index:0})

        await this.page.locator('select#toAccountId').selectOption({index:0})

        const fromId=await this.page.locator(this.fromAccount).inputValue()
        const toId=await this.page.locator(this.toAccount).inputValue()

        console.log('From Account:',fromId);
        console.log('To Account:', toId);
        
        
        await this.page.locator(this.transferButton).click()
        return {fromId,toId}
    }

    async validateTransfer(){
     await expect(this.page.getByText('Transfer Complete!')).toBeVisible()
     console.log('Transfer Complete!');
     await this.page.screenshot({
        path:'screenshots/transferFunds/transferFunds.png'
     })
     
    }

//     async getAccountId(){
//         const account=await this.page.locator('select#toAccountId').inputValue()
//         console.log(account);
//         return account
        
//     }
 }