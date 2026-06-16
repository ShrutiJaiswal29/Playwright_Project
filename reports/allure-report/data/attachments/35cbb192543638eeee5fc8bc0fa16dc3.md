# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\negativeTransfer.spec.ts >> @regression transfer with blank fields
- Location: tests\ui\negativeTransfer.spec.ts:15:5

# Error details

```
ReferenceError: TransferFundsPage is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | import { RegisterPage } from '../../pages/RegisterPage'
  4  | import { OpenAccountPage } from '../../pages/OpenAccountPage'
  5  | import { generateUser } from '../../utils/dataGenerator'
  6  | 
  7  | const user=generateUser()
  8  | //import { TransferFundsPage } from '../../pages/TransferFundsPage'
  9  | //import userData from '../../test-data/userData.json'
  10 | 
  11 | // const randomNumber=Date.now()
  12 | // const username=`user${randomNumber}`
  13 | // const password='Test@123'
  14 | 
  15 | test('@regression transfer with blank fields',async({page})=>{
  16 |     const register=new RegisterPage(page)
  17 |     const account=new OpenAccountPage(page)
> 18 |     const transfer=new TransferFundsPage(page)
     |                    ^ ReferenceError: TransferFundsPage is not defined
  19 | 
  20 |     await register.openRegisterPage()
  21 | 
  22 |     await register.fillDetails(user)
  23 |     await register.fillCredentials(user.username,user.password)
  24 | 
  25 |     await register.submitRegister()
  26 |     await register.validateRegistration()
  27 | 
  28 |     await account.openAccount()
  29 |     await account.createAccount('SAVINGS')
  30 |     
  31 |     await page.getByRole('link',{name:'Transfer Funds'}).click()
  32 |     await page.waitForURL('(/transfer\.htm/)')
  33 | 
  34 |     await page.locator('input#amount').fill('')
  35 | 
  36 |     await page.locator('select#fromAccountId').selectOption({index:0})
  37 |     await page.locator('select#toAccountId').selectOption({index:0})
  38 | 
  39 |     await page.locator('input[value="Transfer"]').click()
  40 | 
  41 |     await expect(page.getByText('Transfer Complete!')).not.toBeVisible()
  42 |     console.log('Negative test passed');
  43 | 
  44 |     await page.screenshot({path:'screenshots/negativeTransfer/negative_transfer.png'})
  45 | })
  46 | 
  47 | 
```