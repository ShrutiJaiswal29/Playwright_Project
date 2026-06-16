# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\createAccountHybrid.spec.ts >> @e2e @smoke create account ui and validate api
- Location: tests\e2e\createAccountHybrid.spec.ts:9:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('p.title')
Expected substring: "Welcome"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('p.title')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome Shruti Jaiswal
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Welcome user1781350914745" [level=1]
- paragraph: Your account was created successfully. You are now logged in.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
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
  20 |          await this.page.goto('https://parabank.parasoft.com/')
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
  48 |        await expect(this.page.locator('p.title')).
> 49 |        toContainText('Welcome', {timeout: 10000})
     |        ^ Error: expect(locator).toContainText(expected) failed
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