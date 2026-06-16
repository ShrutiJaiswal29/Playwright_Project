# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> @regression login with wrong password shows error
- Location: tests\ui\login.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Test source

```ts
  1  | import {expect,Page} from '@playwright/test'
  2  | export class LoginPage{
  3  | constructor(page:Page){
  4  |   this.page=page
  5  |   this.username='input[name="username"]'
  6  |   this.password='input[name="password"]'
  7  | }
  8  | 
  9  | async openLogin(){
  10 |   await this.page.goto('https://parabank.parasoft.com/')
  11 | }
  12 | 
  13 | async login(username:string,password:string){
> 14 |   await this.page.locator(this.username).fill(username)
     |                                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  15 |   await this.page.locator(this.password).fill(password)
  16 |   await this.page.getByRole('button',{name:'Log In'}).click()
  17 | }
  18 | 
  19 | async validateLogin(){
  20 | await expect(this.page).toHaveURL(/overview\.htm/)
  21 | console.log('Login successful')
  22 | 
  23 | await this.page.screenshot({path:'screenshots/login/login.png'})
  24 | 
  25 | }
  26 | 
  27 | }
  28 | 
  29 | 
```