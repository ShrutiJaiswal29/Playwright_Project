# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\accountDetailsAPI.spec.ts >> @api  @regression validate account details
- Location: tests\api\accountDetailsAPI.spec.ts:4:5

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
  3  | //const baseUrl='https:parabank.parasoft.com/parabank/services/bank'
  4  | test('@api  @regression validate account details',async({request,baseUrl})=>{
  5  |     //pehle take list of acccounts
> 6  |     const listResponse=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)
     |                                      ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND parabank.parasoft.com
  7  | 
  8  |     expect(listResponse.status()).toBe(200)
  9  |     const accounts=await listResponse.json()
  10 |     const accountId=accounts[0].id
  11 |     console.log('Account ID:',accountId);
  12 |     
  13 |     //take details of that account
  14 |     const response=await request.get(`${baseUrl}/accounts/${accountId}`)
  15 |     console.log('Status:',response.status())
  16 |     const body=await response.json()
  17 |     console.log('Account details:',body);
  18 | 
  19 |     expect(response.status()).toBe(200)
  20 |     expect(['CHECKING', 'SAVINGS']).toContain(body.type)
  21 |     expect(body.id).toBe(accountId)
  22 | 
  23 |     //balanace number hona chhaiye
  24 |     expect(typeof body.balanace).toBe('number')
  25 |     console.log('Balance is numeric:',body.balanace);
  26 |     
  27 |     
  28 |     
  29 | })
```