import {test,expect} from '@playwright/test'
test('@regression register with blank fields',async({page})=>{
    await page.goto('/parabank/index.htm')
    await page.getByRole('link',{name:'Register'}).click()
    
    await page.getByRole('button',{name:'Register'}).click()

    await expect(page.getByText('First Name is required')).toBeVisible()
    await expect(page.getByText('Last Name is required')).toBeVisible()

    console.log('validation errors shown correctly');
    
    await page.screenshot({
        path:'screenshots/negative/negative_register.png'
    })
})