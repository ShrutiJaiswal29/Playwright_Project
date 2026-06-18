import {test, expect} from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'

test('@api validate account exists', async({request, baseUrl}) => {
    const response = await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`,
         {
         headers:
        {
        Accept: 'application/json'
        }
    })

    expect(response.status()).toBe(200)

    const body = await response.json()
    console.log('Accounts:', body)
    īī
    expect(body.length).toBeGreaterThan(0)
    console.log('Total accounts:', body.length)
})
