# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\register.spec.ts >> @smoke register user
- Location: tests\ui\register.spec.ts:8:5

# Error details

```
ReferenceError: username is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: Shruti" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Shruti" [ref=e52]:
                - textbox [ref=e53]: Shruti
              - cell [ref=e54]
            - 'row "Last Name: Jaiswal" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Jaiswal" [ref=e57]:
                - textbox [ref=e58]: Jaiswal
              - cell [ref=e59]
            - 'row "Address: ShastriNagar" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "ShastriNagar" [ref=e62]:
                - textbox [ref=e63]: ShastriNagar
              - cell [ref=e64]
            - 'row "City: Bhilwara" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Bhilwara" [ref=e67]:
                - textbox [ref=e68]: Bhilwara
              - cell [ref=e69]
            - 'row "State: Rajasthan" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "Rajasthan" [ref=e72]:
                - textbox [ref=e73]: Rajasthan
              - cell [ref=e74]
            - 'row "Zip Code: 311001" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "311001" [ref=e77]:
                - textbox [ref=e78]: "311001"
              - cell [ref=e79]
            - 'row "Phone #: 1234567890" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "1234567890" [ref=e82]:
                - textbox [ref=e83]: "1234567890"
              - cell [ref=e84]
            - 'row "SSN: 0987654321" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "0987654321" [ref=e87]:
                - textbox [active] [ref=e88]: "0987654321"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - row "Username:" [ref=e92]:
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | import {RegisterPage} from '../../pages/RegisterPage'
  3  | import userData from '../../test-data/userData.json'
  4  | import { generateUser } from '../../utils/dataGenerator'
  5  | 
  6  | const user=generateUser()
  7  | 
  8  | test('@smoke register user',async({page})=>{
  9  | 
  10 | const register=new RegisterPage(page)
  11 |  await register.openRegisterPage()
  12 |  await register.fillDetails(userData)
> 13 |  await register.fillCredentials(username,password)
     |                                 ^ ReferenceError: username is not defined
  14 |  await register.submitRegister()
  15 |  await register.validateRegistration()
  16 | 
  17 | })
```