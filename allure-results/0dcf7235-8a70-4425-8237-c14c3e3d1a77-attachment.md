# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\negativeTransfer.spec.ts >> @regression transfer with blank fields
- Location: tests\ui\negativeTransfer.spec.ts:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#customer\\.firstName')

```

# Test source

```ts
  1  | import {expect, Page} from '@playwright/test'
  2  | 
  3  | export class RegisterPage{
  4  |     constructor(page: Page){
  5  |         this.page = page
  6  |         this.firstName = '#customer\\.firstName'
  7  |         this.lastName = '#customer\\.lastName'
  8  |         this.address = '#customer\\.address\\.street'
  9  |         this.city = '#customer\\.address\\.city'
  10 |         this.state = '#customer\\.address\\.state'
  11 |         this.zipCode = '#customer\\.address\\.zipCode'
  12 |         this.phoneNumber = '#customer\\.phoneNumber'
  13 |         this.ssn = '#customer\\.ssn'
  14 |         this.username = '#customer\\.username'
  15 |         this.password = '#customer\\.password'
  16 |         this.confirm = '#repeatedPassword'
  17 |     }
  18 | 
  19 |     async openRegisterPage(){
  20 |         await this.page.goto('/parabank/register.htm')
  21 |     }
  22 | 
  23 |     async fillDetails(userData){
> 24 |         await this.page.locator(this.firstName).fill(userData.firstName)
     |                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  25 |         await this.page.locator(this.lastName).fill(userData.lastName)
  26 |         await this.page.locator(this.address).fill(userData.address)
  27 |         await this.page.locator(this.city).fill(userData.city)
  28 |         await this.page.locator(this.state).fill(userData.state)
  29 |         await this.page.locator(this.zipCode).fill(userData.zipCode)
  30 |         await this.page.locator(this.phoneNumber).fill(userData.phone)
  31 |         await this.page.locator(this.ssn).fill(userData.ssn)
  32 |     }
  33 | 
  34 |     async fillCredentials(username: string, password: string){
  35 |         await this.page.locator(this.username).fill(username)
  36 |         await this.page.locator(this.password).fill(password)
  37 |         await this.page.locator(this.confirm).fill(password)
  38 |         console.log('Username:', username)
  39 |     }
  40 | 
  41 |     async submitRegister(){
  42 |         await this.page.getByRole('button', {name: 'Register'}).click()
  43 |     }
  44 | 
  45 |     async validateRegistration(){
  46 |         await expect(this.page.locator('h1.title')).toBeVisible()
  47 |         await expect(this.page.getByRole('link',{name:'open new account'})).toBeVisible()
  48 |         console.log('Registration successful')
  49 |         await this.page.screenshot({path: 'screenshots/register/register.png'})
  50 |     }
  51 | }
  52 | 
```