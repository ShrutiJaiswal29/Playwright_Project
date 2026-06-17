import {test,expect} from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'

test('@api validate login api',async({request,baseUrl})=>{
    const response=await request.get(`${baseUrl}/login/${userData.username}/${userData.password}`)

    console.log('Status:',response.status())

    expect(response.status()).toBe(200)
    
})