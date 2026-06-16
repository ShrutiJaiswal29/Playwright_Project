# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance-lite\performance.spec.ts >> @regression API response must be under 2 seconds
- Location: tests\performance-lite\performance.spec.ts:15:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import userData from '../../test-data/userData.json'
  3  | 
  4  | const baseUrl='https://parabank.parasoft.com/parabank/services'
  5  | 
  6  | test('@regression page load time check',async({page})=>{
  7  |     await page.goto('https://parabank.parasoft.com/parabank/index.htm')
  8  |     const loadTime= await page.evaluate(()=>{
  9  |         return performance.timing.loadEventEnd- performance.timing.navigationStart
  10 |     })
  11 |     console.log('Page load time:',loadTime,'ms');
  12 |     expect(loadTime).toBeLessThan(10000)
  13 | })
  14 | 
  15 | test('@regression API response must be under 2 seconds',async({request})=>{
  16 |     const start=Date.now()
  17 |     const response=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)
  18 | 
  19 |     const duration=Date.now()-start
  20 |     console.log('API response time:',duration,'ms');
> 21 |     expect(response.status()).toBe(200)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |     expect (duration).toBeLessThan(2000)  
  23 | })
  24 | 
  25 | test('@regression 20 concurrent calls all return 200',async({request})=>{
  26 |     const calls=[]
  27 |     for (let i=0; i<20; i++){
  28 |         calls.push(request.get(`${baseUrl}/customers/${userData.customerId}/accounts`))
  29 |     }
  30 | 
  31 |     const start=Date.now()
  32 |     const responses=await Promise.all(calls)
  33 |     const total=Date.now()-start
  34 | 
  35 |     console.log('20 calls done in:', total ,'ms');
  36 | 
  37 |     for(const res of responses){
  38 |         expect(res.status()).toBe(200)
  39 |     }
  40 | 
  41 |     console.log('All 20 calls returned 200');
  42 |     
  43 | })
```