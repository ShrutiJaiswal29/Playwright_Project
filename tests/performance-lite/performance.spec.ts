import {test,expect} from '@playwright/test'
import userData from '../../test-data/userData.json'

const baseUrl='https://parabank.parasoft.com/parabank/services/bank'

test('@regression page load time check',async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    const loadTime= await page.evaluate(()=>{
        return performance.timing.loadEventEnd- performance.timing.navigationStart
    })
    console.log('Page load time:',loadTime,'ms');
    expect(loadTime).toBeLessThan(10000)
})

test('@regression API response must be under 2 seconds',async({request})=>{
    const start=Date.now()
    const response=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)

    const duration=Date.now()-start
    console.log('API response time:',duration,'ms');
    expect(response.status()).toBe(200)
    expect (duration).toBeLessThan(2000)  
})

test('@regression 20 concurrent calls all return 200',async({request})=>{
    const calls=[]
    for (let i=0; i<20; i++){
        calls.push(request.get(`${baseUrl}/customers/${userData.customerId}/accounts`))
    }

    const start=Date.now()
    const responses=await Promise.all(calls)
    const total=Date.now()-start

    console.log('20 calls done in:', total ,'ms');

    for(const res of responses){
        expect(res.status()).toBe(200)
    }

    console.log('All 20 calls returned 200');
    
})