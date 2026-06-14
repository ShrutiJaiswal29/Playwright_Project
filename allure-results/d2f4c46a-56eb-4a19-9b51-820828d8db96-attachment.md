# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\loginAPI.spec.ts >> @api validate login api
- Location: tests\api\loginAPI.spec.ts:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixture'
  2  | // import userData from '../../test-data/userData.json'
  3  | 
  4  | //onst baseUrl='https://parabank.parasoft.com/parabank/services/bank'
  5  | 
  6  | test('@api validate login api',async({request,baseUrl})=>{
  7  |     const response=await request.get(`${baseUrl}/login/john/demo`)
  8  | 
  9  |     console.log('Status:',response.status())
  10 | 
> 11 |     expect(response.status()).toBe(400)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  12 |     
  13 | })
```