# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\accountAPI.spec.ts >> @api get accounts list
- Location: tests\api\accountAPI.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  |  import {test,expect} from '../../fixtures/apiFixture'
  2  |  import userData from '../../test-data/userData.json'
  3  | 
  4  | test('@api get accounts list',async({request,baseUrl})=>{
  5  | 
  6  |     const response= await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)
  7  |     console.log('Status:',response.status());
  8  | 
  9  |     const body=await response.text()
  10 | 
  11 |     console.log('Response:',body)
  12 | 
> 13 |     expect(response.status()).toBe(200)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  14 |  }) 
```