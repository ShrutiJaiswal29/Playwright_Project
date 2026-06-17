import { test, expect } from '../../fixtures/apiFixture'
import userData from '../../test-data/userData.json'

test('@api validate login api', async({request, baseUrl}) => {

const response =
await request.get(
`${baseUrl}/login/${userData.username}/${userData.password}`
)

console.log(
'Status:',
response.status()
)

const body =
await response.text()

console.log(
'Response:',
body
)

// validate only that response received

expect(
response.status()
).toBeLessThan(500)

expect(
body.length
).toBeGreaterThan(0)

})