 import {test,expect} from '../../fixtures/apiFixture'
 import userData from '../../test-data/userData.json'

test('@api get accounts list',async({request,baseUrl})=>{

    const response= await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)
    console.log('Status:',response.status());

    const body=await response.text()

    console.log('Response:',body)

    expect(response.status()).toBe(200)
 }) 