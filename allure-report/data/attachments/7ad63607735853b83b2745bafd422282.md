# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\createAccountHybrid.spec.ts >> @e2e @smoke create account ui and validate api
- Location: tests\e2e\createAccountHybrid.spec.ts:9:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://parabank.parasoft.com/
Call log:
  - navigating to "https://parabank.parasoft.com/", waiting until "load"

```

# Test source

```ts
  1  | import {expect, Page} from '@playwright/test'
  2  | export class RegisterPage{
  3  | constructor(page:Page){
  4  |         this.page=page
  5  |         this.firstName='#customer\\.firstName'
  6  |         this.lastName='#customer\\.lastName'
  7  |         this.address='#customer\\.address\\.street'
  8  |         this.city='#customer\\.address\\.city'
  9  |         this.state='#customer\\.address\\.state'
  10 |         this.zipCode='#customer\\.address\\.zipCode'
  11 |         this.phoneNumber='#customer\\.phoneNumber'
  12 |         this.ssn='#customer\\.ssn'
  13 |         this.username='#customer\\.username'
  14 |         this.password='#customer\\.password'
  15 |         this.confirm='#repeatedPassword'
  16 | 
  17 |     }
  18 | 
  19 |     async openRegisterPage(){
> 20 |          await this.page.goto('https://parabank.parasoft.com/')
     |                          ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://parabank.parasoft.com/
  21 |          await this.page.getByRole('link',{name:'Register'}).click()
  22 |         }
  23 | 
  24 |     async fillDetails(userData){
  25 |          await this.page.locator(this.firstName).fill(userData.firstName)
  26 |          await this.page.locator(this.lastName).fill(userData.lastName)
  27 |          await this.page.locator(this.address).fill(userData.address)
  28 |          await this.page.locator(this.city).fill(userData.city)
  29 |          await this.page.locator(this.state).fill(userData.state) 
  30 |          await this.page.locator(this.zipCode).fill(userData.zipCode)
  31 |          await this.page.locator(this.phoneNumber).fill(userData.phone)
  32 |          await this.page.locator(this.ssn).fill(userData.ssn)
  33 |         }   
  34 |         
  35 |     async fillCredentials(username:string,password:string){
  36 |        await this.page.locator(this.username).fill(username)
  37 |        await this.page.locator(this.password).fill(password)
  38 |        await this.page.locator(this.confirm).fill(password)
  39 |        console.log(username)
  40 |        console.log(password)
  41 |         }
  42 |     
  43 |     async submitRegister(){
  44 |        await this.page.getByRole('button',{name:'Register'}).click()
  45 |         }
  46 | 
  47 |     async validateRegistration(){
  48 |        await expect(this.page.locator('h1')).
  49 |        toContainText('Welcome')
  50 | 
  51 |        console.log('Registration successful');
  52 |        
  53 |        await this.page.screenshot({
  54 |         path:'screenshots/register/register.png'
  55 |        })
  56 |         }
  57 |     
  58 |     }
  59 | 
```