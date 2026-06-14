# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\validateAccountAPI.spec.ts >> @api validate account exists
- Location: tests\api\validateAccountAPI.spec.ts:6:5

# Error details

```
Error: apiRequestContext.get: getaddrinfo ENOTFOUND parabank.parasoft.com
Call log:
  - → GET https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixture'
  2  | import userData from '../../test-data/userData.json'
  3  | 
  4  | //const baseUrl='https://parabank.parasoft.com/parabank/services/bank'
  5  | 
  6  | test('@api validate account exists',async({request,baseUrl})=>{
> 7  |     const response=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)
     |                                  ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND parabank.parasoft.com
  8  |     expect(response.status()).toBe(200)
  9  | 
  10 |     const body=await response.json()
  11 |     console.log('Accounts:',body);
  12 | 
  13 |     expect(body.length).toBeGreaterThan(0)
  14 |     console.log('Total accounts:',body.length);
  15 |     
  16 | })
```