import {test, expect} from '../../fixtures/apiFixture'
import transferData from '../../test-data/transfer-data.json'

test('@api @regression balance is numeric', async({request, baseUrl}) => {
    const response = await request.get(`${baseUrl}/accounts/${transferData.accountId}`, {headers: {Accept: 'application/json'}})
    console.log('Status:', response.status())
    const body = await response.json()
    console.log('Response:', body)
    expect(response.status()).toBe(200)
    expect(body).toHaveProperty('balance')
    expect(typeof body.balance).toBe('number')
    console.log('Balance:', body.balance)
})
