# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\balanceValidationAPI.spec.ts >> @api @regression balance is numeric
- Location: tests\api\balanceValidationAPI.spec.ts:6:5

# Error details

```
SyntaxError: Unexpected token '<', "<html><bod"... is not valid JSON
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixture'
  2  | import transferData from '../../test-data/transfer-data.json'
  3  | 
  4  | //const baseUrl='https://parabank.parasoft.com/parabank/services/bank'
  5  | 
  6  | test('@api @regression balance is numeric',async({request,baseUrl})=>{
  7  |     const response=await request.get(`${baseUrl}/accounts/${transferData.accountId}`)
  8  |     console.log('status:',response.status());
  9  | 
> 10 |     const body=await response.json()
     |                ^ SyntaxError: Unexpected token '<', "<html><bod"... is not valid JSON
  11 | 
  12 |     console.log('Response:',body);
  13 |     expect(response.status()).toBe(200)
  14 | 
  15 |     expect(body).toHaveProperty('balance')
  16 |     expect(typeof body.balanace).toBe('number')
  17 |     console.log('Balance:', body.balanace);
  18 |     
  19 | })
```