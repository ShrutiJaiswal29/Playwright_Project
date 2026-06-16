# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\transferValidationAPI.spec.ts >> @api @regression validating transfer occurred correctly
- Location: tests\api\transferValidationAPI.spec.ts:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixture'
  2  | import userData from '../../test-data/userData.json'
  3  | 
  4  | //const baseUrl='https://parabank.parasoft.com/parabank/services/bank'
  5  | 
  6  | test('@api @regression validating transfer occurred correctly',async({request,baseUrl})=>{
  7  |     const listResponse=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)
> 8  |     expect(listResponse.status()).toBe(200)
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  9  |     const acccounts=await listResponse.json()
  10 |     expect (acccounts.length).toBeGreaterThanOrEqual(2)
  11 | 
  12 |     const fromId=acccounts[0].id
  13 |     const toId=acccounts[1].id
  14 | 
  15 |     const fromBefore=(await (await request.get(`${baseUrl}/accounts/${fromId}`)).json()).balance
  16 |     const toBefore=(await (await request.get(`${baseUrl}/accounts/${toId}`)).json()).balanace
  17 | 
  18 |     console.log('BEFORE- From:', fromBefore, 'To:', toBefore);
  19 | 
  20 |     const amount=50
  21 |     const transferResponse=await request.post(`${baseUrl}/transfer?fromAccountId=${fromId} & toAccountId=${toId} & amount=${amount}`)
  22 | 
  23 |     expect(transferResponse.status()).toBe(200)
  24 |     console.log('Transfer done');
  25 | 
  26 |     const fromAfter=(await (await request.get(`${baseUrl}/accounts/${fromId}`)).json()).balanace
  27 |     const toAfter=(await (await request.get(`${baseUrl}/accounts/${toId}`)).json()).balanace
  28 | 
  29 |     console.log('AFTER - From:',fromAfter,'To:',toAfter);
  30 |     
  31 |     expect (fromAfter).toBe(fromBefore- amount)
  32 |     expect(toAfter).toBe(toBefore + amount)
  33 | 
  34 |     console.log('Passes- before after values are correct');
  35 |     
  36 | })
```