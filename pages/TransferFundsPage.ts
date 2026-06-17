import {expect,Page} from '@playwright/test'
import userData from '../test-data/userData.json'

export class TransferFundsPage{
    constructor(page:Page){
        this.page=page
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

await this.page
.locator(this.amount)
.fill(
userData.transferAmount.toString()
)

// wait until transfer page loads
await this.page.waitForLoadState('networkidle')

// find account options
const optionsLocator =
this.page.locator(
'select#fromAccountId option'
)

// wait until at least one account exists
await expect(
optionsLocator
).not.toHaveCount(0)

const options =
await optionsLocator.count()

console.log(
'Accounts:',
options
)

// select source account
await this.page
.locator(
this.fromAccount
)
.selectOption({
index:0
})

// select target account only if available
if(options>1){

await this.page
.locator(
this.toAccount
)
.selectOption({
index:1
})

}

const fromId =
await this.page
.locator(
this.fromAccount
)
.inputValue()

const toId =
await this.page
.locator(
this.toAccount
)
.inputValue()

console.log(
'From Account:',
fromId
)

console.log(
'To Account:',
toId
)

await this.page
.locator(
this.transferButton
)
.click()

return {
fromId,
toId
}

}

    async validateTransfer(){
     await expect(this.page.getByText('Transfer Complete!')).toBeVisible()
     console.log('Transfer Complete!');
     await this.page.screenshot({
        path:'screenshots/transferFunds/transferFunds.png'
     })
     
    }
 }