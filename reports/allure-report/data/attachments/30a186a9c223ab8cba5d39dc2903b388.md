# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\balanceValidationAPI.spec.ts >> @api @regression balance is numeric
- Location: tests\api\balanceValidationAPI.spec.ts:4:5

# Error details

```
SyntaxError: Unexpected token 'C', "Could not "... is not valid JSON
```

# Test source

```ts
  1  | import {test, expect} from '../../fixtures/apiFixture'
  2  | import transferData from '../../test-data/transfer-data.json'
  3  | 
  4  | test('@api @regression balance is numeric', async({request, baseUrl}) => {
  5  |     const response = await request.get(`${baseUrl}/accounts/${transferData.accountId}`, {headers: {Accept: 'application/json'}})
  6  |     console.log('Status:', response.status())
> 7  |     const body = await response.json()
     |                  ^ SyntaxError: Unexpected token 'C', "Could not "... is not valid JSON
  8  |     console.log('Response:', body)
  9  |     expect(response.status()).toBe(200)
  10 |     expect(body).toHaveProperty('balance')
  11 |     expect(typeof body.balance).toBe('number')
  12 |     console.log('Balance:', body.balance)
  13 | })
  14 | 
```