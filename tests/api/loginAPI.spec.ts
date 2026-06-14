import {test,expect} from '../../fixtures/apiFixture'
// import userData from '../../test-data/userData.json'

//onst baseUrl='https://parabank.parasoft.com/parabank/services/bank'

test('@api validate login api',async({request,baseUrl})=>{
    const response=await request.get(`${baseUrl}/login/john/demo`)

    console.log('Status:',response.status())

    expect(response.status()).toBe(200)
    
})