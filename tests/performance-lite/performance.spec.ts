import {test,expect} from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'

//validate ui page load performance
test('@regression page load time check',async({page,})=>{
    await page.goto('/parabank/index.htm')
    const loadTime= await page.evaluate(()=>{
        return performance.getEntriesByType('navigation')[0].duration
    })
    console.log('Page load time:',loadTime,'ms');
    expect(loadTime).toBeLessThan(5000)
})

//validate api response
test('@regression API response must be under 2 seconds',async({request, baseUrl})=>{
    const start=Date.now()
    const response=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)

    const duration=Date.now()-start
    console.log('API response time:',duration,'ms');
    expect(response.status()).toBe(200)
    expect (duration).toBeLessThan(2000)  
})

//validation using parallel requests
test('@regression 20 concurrent calls all return 200',async({request, baseUrl})=>{    
    const start=Date.now()
    const calls=[]
    for (let i=0; i<20; i++){
        calls.push(request.get(`${baseUrl}/customers/${userData.customerId}/accounts`))
    }
    const responses=await Promise.all(calls)
    const total=Date.now()-start

    console.log('20 calls done in:', total ,'ms');

    for(const res of responses){
        expect(res.status()).toBe(200)
    }

    console.log('All 20 calls returned 200');  
})