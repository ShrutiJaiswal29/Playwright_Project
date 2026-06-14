import {test,expect} from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'
//const baseUrl='https:parabank.parasoft.com/parabank/services/bank'
test('@api  @regression validate account details',async({request,baseUrl})=>{
    //pehle take list of acccounts
    //bconst listResponse=await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`)

const listResponse = await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`, {headers: {Accept: 'application/json'}})
    expect(listResponse.status()).toBe(200)
    const accounts=await listResponse.json()
    const accountId=Number(accounts[0].id)
    console.log('Account ID:',accountId);
    
    //take details of that account
    const response = await request.get(`${baseUrl}/accounts/${accountId}`, {headers: {Accept: 'application/json'}})
    console.log('Status:',response.status())
    const body=await response.json()
    console.log('Account details:',body);

    expect(response.status()).toBe(200)
    expect(['CHECKING', 'SAVINGS']).toContain(body.type)
    expect(body.id).toBe(accountId)

    //balanace number hona chhaiye
    expect(typeof body.balance).toBe('number')
    console.log('Balance is numeric:',body.balance);
    
    
    
})