import {test, expect} from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'

test('@api @regression validating transfer occurred correctly', async({request, baseUrl}) => {
    const headers = {Accept: 'application/json'}
    const listResponse = await request.get(`${baseUrl}/customers/${userData.customerId}/accounts`, {headers})
    expect(listResponse.status()).toBe(200)
    const accounts = await listResponse.json()
    expect(accounts.length).toBeGreaterThanOrEqual(2)
    const fromId = accounts[0].id
    const toId = accounts[1].id
    const fromBefore = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
    const toBefore = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
    console.log('BEFORE - From:', fromBefore, 'To:', toBefore)
    const amount = 50
    const transferResponse = await request.post(`${baseUrl}/transfer?fromAccountId=${fromId}&toAccountId=${toId}&amount=${amount}`)
    expect(transferResponse.status()).toBe(200)
    console.log('Transfer done')
    const fromAfter = (await (await request.get(`${baseUrl}/accounts/${fromId}`, {headers})).json()).balance
    const toAfter = (await (await request.get(`${baseUrl}/accounts/${toId}`, {headers})).json()).balance
    console.log('AFTER - From:', fromAfter, 'To:', toAfter)
    expect(fromAfter).toBe(fromBefore - amount)
    expect(toAfter).toBe(toBefore + amount)
    console.log('PASSED - before/after values correct')
})
