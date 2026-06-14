const fs = require('fs')
const path = require('path')

const resultsFile = path.join(process.cwd(), 'test-results', 'results.json')
const outputFile = path.join(process.cwd(), 'failure-analysis-report.html')

if (!fs.existsSync(resultsFile)) {
    console.log('No results.json found. Run tests first.')
    process.exit(1)
}

const results = JSON.parse(fs.readFileSync(resultsFile, 'utf-8'))
const failures = []

function checkSuites(suites) {
    for (const suite of suites) {
        for (const spec of (suite.specs || [])) {
            for (const test of (spec.tests || [])) {
                const failed = test.results.some(r => r.status === 'failed')
                if (failed) {
                    const result = test.results.find(r => r.status === 'failed')
                    failures.push({
                        name: spec.title,
                        reason: result.error ? result.error.message : 'Unknown error'
                    })
                }
            }
        }
        if (suite.suites) checkSuites(suite.suites)
    }
}

checkSuites(results.suites || [])

const rows = failures.length === 0
    ? '<tr><td colspan="2" style="color:green;text-align:center">All tests passed!</td></tr>'
    : failures.map(f => `<tr><td>${f.name}</td><td style="color:red">${f.reason.substring(0, 200)}</td></tr>`).join('')

const html = `<!DOCTYPE html>
<html>
<head>
  <title>Failure Analysis Report</title>
  <style>
    body { font-family: Arial; padding: 30px; }
    h1 { color: #c0392b; }
    table { border-collapse: collapse; width: 100%; }
    th { background: #2c3e50; color: white; padding: 10px; text-align: left; }
    td { padding: 10px; border-bottom: 1px solid #ddd; }
  </style>
</head>
<body>
  <h1>Failure Analysis Report</h1>
  <p>Total Failures: <strong>${failures.length}</strong></p>
  <p>Generated: ${new Date().toLocaleString()}</p>
  <table>
    <thead><tr><th>Test Name</th><th>Failure Reason</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`

fs.writeFileSync(outputFile, html)
console.log('Report saved to:', outputFile)
console.log('Total failures:', failures.length)
