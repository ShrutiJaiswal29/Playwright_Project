# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\transferValidationAPI.spec.ts >> @api @regression validating transfer occurred correctly
- Location: tests\api\transferValidationAPI.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 10.450000000000003
Received: 10.45
```

# Test source

```ts
  1  | import {test, expect} from '../../fixtures/apiFixture'
  2  | import userData from '../../test-data/userData.json'
  3  | 
  4  | test('@api @regression validating transfer occurred correctly', async({request, baseUrl}) => {
  5  |     const headers = {Accept: 'application/json'}
  6  |     const listResponse = await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`, {headers})
  7  |     expect(listResponse.status()).toBe(200)
  8  |     const accounts = await listResponse.json()
  9  |     expect(accounts.length).toBeGreaterThanOrEqual(2)
  10 |     const fromId = accounts[0].id
  11 |     const toId = accounts[1].id
  12 |     const fromBefore = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
  13 |     const toBefore = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
  14 |     console.log('BEFORE - From:', fromBefore, 'To:', toBefore)
  15 |     const amount = 50
  16 |     const transferResponse = await request.post(`${baseUrl}/transfer?fromAccountId=${fromId}&toAccountId=${toId}&amount=${amount}`)
  17 |     expect(transferResponse.status()).toBe(200)
  18 |     console.log('Transfer done')
  19 |     const fromAfter = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
  20 |     const toAfter = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
  21 |     console.log('AFTER - From:', fromAfter, 'To:', toAfter)
  22 |     expect(fromAfter).toBe(fromBefore - amount)
> 23 |     expect(toAfter).toBe(toBefore + amount)
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  24 |     console.log('PASSED - before/after values correct')
  25 | })
  26 | 
```