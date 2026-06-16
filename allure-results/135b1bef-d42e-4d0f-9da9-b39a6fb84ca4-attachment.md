# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\registerNegative.spec.ts >> @regression register with blank fields
- Location: tests\ui\registerNegative.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Register' })

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('@regression register with blank fields',async({page})=>{
  3  |     await page.goto('/parabank/index.htm')
> 4  |     await page.getByRole('link',{name:'Register'}).click()
     |                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  5  |     
  6  |     await page.getByRole('button',{name:'Register'}).click()
  7  | 
  8  |     await expect(page.getByText('First Name is required')).toBeVisible()
  9  |     await expect(page.getByText('Last Name is required')).toBeVisible()
  10 | 
  11 |     console.log('validation errors shown correctly');
  12 |     
  13 |     await page.screenshot({
  14 |         path:'screenshots/negative/negative_register.png'
  15 |     })
  16 | })
```