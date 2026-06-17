import {test,expect} from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'

test('@api  @regression validate account details',async({request,baseUrl})=>{
//first get list of accounts
const listResponse = await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`, 
    {
    headers: {
        Accept: 'application/json'
    }
    })
    expect(listResponse.status()).toBe(200)
    const accounts=await listResponse.json()

    const accountId=Number(accounts[0].id)
    console.log('Account ID:',accountId);
    
    //take details of that account
    const response = await request.get(`${baseUrl}/accounts/${accountId}`,
    {
    headers: {
        Accept: 'application/json'
    }
   })
    console.log('Status:',response.status())
    const body=await response.json()

    console.log('Account details:',body);
    //validate
    expect(response.status()).toBe(200)
    expect(['CHECKING', 'SAVINGS']).toContain(body.type)
    //validate id mactches or not
    expect(body.id).toBe(accountId)

    //balanace is numeric or not
    expect(typeof body.balance).toBe('number')
    console.log('Balance is numeric:',body.balance);
    
    
    
})