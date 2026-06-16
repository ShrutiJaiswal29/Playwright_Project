# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\transferHybrid.spec.ts >> @e2e @regression transfer via UI then validate balance via API
- Location: tests\e2e\transferHybrid.spec.ts:9:5

# Error details

```
SyntaxError: Unexpected end of JSON input
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
      - generic [ref=e50]:
        - heading "Transfer Funds" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]:
            - text: "Amount: $"
            - textbox [ref=e54]
          - generic [ref=e55]:
            - text: "From account #"
            - combobox [ref=e56]:
              - option "27219" [selected]
            - text: "to account #"
            - combobox [ref=e57]:
              - option "27219" [selected]
          - button "Transfer" [ref=e59] [cursor=pointer]
  - generic [ref=e61]:
    - list [ref=e62]:
      - listitem [ref=e63]:
        - link "Home" [ref=e64] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e65]:
        - link "About Us" [ref=e66] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e67]:
        - link "Services" [ref=e68] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e69]:
        - link "Products" [ref=e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e71]:
        - link "Locations" [ref=e72] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e73]:
        - link "Forum" [ref=e74] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e75]:
        - link "Site Map" [ref=e76] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e77]:
        - link "Contact Us" [ref=e78] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e79]: © Parasoft. All rights reserved.
    - list [ref=e80]:
      - listitem [ref=e81]: "Visit us at:"
      - listitem [ref=e82]:
        - link "www.parasoft.com" [ref=e83] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import {RegisterPage} from '../../pages/RegisterPage'
  3  | import {OpenAccountPage} from '../../pages/OpenAccountPage'
  4  | import {generateUser} from '../../utils/dataGenerator'
  5  | 
  6  | const baseUrl = 'https://parabank.parasoft.com/parabank/services/bank'
  7  | const user = generateUser()
  8  | 
  9  | test('@e2e @regression transfer via UI then validate balance via API', async({page, request}) => {
  10 |     const headers = {Accept: 'application/json'}
  11 |     const register = new RegisterPage(page)
  12 |     const account = new OpenAccountPage(page)
  13 | 
  14 |     await register.openRegisterPage()
  15 |     await register.fillDetails(user)
  16 |     await register.fillCredentials(user.username, user.password)
  17 |     await register.submitRegister()
  18 |     await register.validateRegistration()
  19 | 
  20 |     await account.openAccount()
  21 |     const newAccountId = await account.createAccount('SAVINGS')
  22 | 
  23 |     await page.getByRole('link', {name: 'Transfer Funds'}).click()
  24 |     await page.waitForURL(/transfer\.htm/)
  25 | 
  26 |     const fromId = await page.locator('select#fromAccountId').inputValue()
  27 |     const toId = newAccountId
  28 |     const amount = 100
  29 | 
> 30 |     const fromBefore = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
     |                         ^ SyntaxError: Unexpected end of JSON input
  31 |     const toBefore = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
  32 |     console.log('Before - from:', fromBefore, 'To:', toBefore)
  33 | 
  34 |     await page.locator('input#amount').fill(String(amount))
  35 |     await page.locator('select#fromAccountId').selectOption({value: fromId})
  36 |     await page.locator('select#toAccountId').selectOption({value: toId})
  37 |     await page.locator('input[value="Transfer"]').click()
  38 | 
  39 |     await expect(page.getByText('Transfer Complete!')).toBeVisible()
  40 |     console.log('Transfer Complete!')
  41 | 
  42 |     const fromAfter = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
  43 |     const toAfter = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
  44 |     console.log('After - from:', fromAfter, 'To:', toAfter)
  45 | 
  46 |     expect(fromAfter).toBe(fromBefore - amount)
  47 |     expect(toAfter).toBe(toBefore + amount)
  48 |     console.log('PASSED')
  49 | })
  50 | 
```