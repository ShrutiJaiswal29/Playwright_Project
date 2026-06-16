# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\openAccountPage.spec.ts >> @smoke @regression create account
- Location: tests\ui\openAccountPage.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Welcome')
Expected: visible
Error: strict mode violation: getByText('Welcome') resolved to 2 elements:
    1) <b>Welcome</b> aka getByText('Welcome', { exact: true })
    2) <h1 class="title">Welcome user1781351126004</h1> aka getByRole('heading', { name: 'Welcome user1781351126004' })

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Welcome')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome Shruti Jaiswal
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e48]:
        - heading "Welcome user1781351126004" [level=1] [ref=e49]
        - paragraph [ref=e50]: Your account was created successfully. You are now logged in.
  - generic [ref=e52]:
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "About Us" [ref=e57] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "Services" [ref=e59] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Products" [ref=e61] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e62]:
        - link "Locations" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Forum" [ref=e65] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e66]:
        - link "Site Map" [ref=e67] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Contact Us" [ref=e69] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e70]: © Parasoft. All rights reserved.
    - list [ref=e71]:
      - listitem [ref=e72]: "Visit us at:"
      - listitem [ref=e73]:
        - link "www.parasoft.com" [ref=e74] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
  20 |         await this.page.goto('https://parabank.parasoft.com/')
  21 |         await this.page.getByRole('link', {name: 'Register'}).click()
  22 |     }
  23 | 
  24 |     async fillDetails(userData){
  25 |         await this.page.locator(this.firstName).fill(userData.firstName)
  26 |         await this.page.locator(this.lastName).fill(userData.lastName)
  27 |         await this.page.locator(this.address).fill(userData.address)
  28 |         await this.page.locator(this.city).fill(userData.city)
  29 |         await this.page.locator(this.state).fill(userData.state)
  30 |         await this.page.locator(this.zipCode).fill(userData.zipCode)
  31 |         await this.page.locator(this.phoneNumber).fill(userData.phone)
  32 |         await this.page.locator(this.ssn).fill(userData.ssn)
  33 |     }
  34 | 
  35 |     async fillCredentials(username: string, password: string){
  36 |         await this.page.locator(this.username).fill(username)
  37 |         await this.page.locator(this.password).fill(password)
  38 |         await this.page.locator(this.confirm).fill(password)
  39 |         console.log('Username:', username)
  40 |     }
  41 | 
  42 |     async submitRegister(){
  43 |         await this.page.getByRole('button', {name: 'Register'}).click()
  44 |     }
  45 | 
  46 |     async validateRegistration(){
> 47 |         await expect(this.page.getByText('Welcome')).toBeVisible({timeout: 15000})
     |                                                      ^ Error: expect(locator).toBeVisible() failed
  48 |         console.log('Registration successful')
  49 |         await this.page.screenshot({path: 'screenshots/register/register.png'})
  50 |     }
  51 | }
  52 | 
```