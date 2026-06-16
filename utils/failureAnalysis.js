const fs= require('fs')
const path=require('path')

const resultPath=path.join('C:\\Users\\shrut\\OneDrive\\Desktop\\Playwright_Project', 'test-results', 'results.json')
const reportPath= path.join('C:\\Users\\shrut\\OneDrive\\Desktop\\Playwright_Project', 'failure-analysis-report.html')

if(!fs.existsSync(resultPath)){
    console.log('run npm test first')
    process.exit(1)
}

const data=JSON.parse(fs.readFileSync(resultPath,'utf-8'))

const failedList=[]
let totalCount =0 
let passCount= 0

function checkTestGroups(groups){
for(const group of groups){
    for(const testCase of(group.specs || [])){
        for(const run of(testCase.tests || [])){
           totalCount++

           const didFail=run.results.some(r=> r.status ==='failed')

           if(didFail){
            const failInfo= run.results.find(r=> r.status ==='failed')
            failedList.push({
                testName: testCase.title,
                errorMsg: failInfo.error ? failInfo.error.message.split('\n')[0] : 'no error message found'
            })
           } 
           else{
            passCount++
           }
        }
    }

    if(group.suites){
        checkTestGroups(group.suites)
    }
}
}

checkTestGroups(data.suites || [])

const failCount= failedList.length
const passPercent= totalCount > 0 ? ((passCount/totalCount)* 100).toFixed(1) : '0'
const currentTime= new Date().toLocaleString()

const tableRows = failCount ===0 ? '<tr><td colspan="2" class="green-msg">All tests passed</td></tr>' : failedList.map(item=>`<tr> <td>${item.testName}</td> <td class="err-msg"> ${item.errorMsg.substring(0,200)}</td> </tr>`).join('')

const reportContent=`<!DOCTYPE html>
<html>
    <head>
        <title>
            Test Failure Report
        </title>
        <style>
            body{
                font-family: Arial, sans-serif;
                padding: 30px;
                background: lightgray;
            }
            h1{
                color:red;
            }

            h2{
                color:darkblue;
                margin-top: 30px;
            }

            .summary-box{
                background:white;
                padding: 15px 20px;
                border-left: 5px solid darkblue;
                border-radius: 5px;
                margin-bottom:25px;
            }

            .summary-box p{
                margin: 6px 0;
                font-size: 15px;
            }

            .red{color: red; font-weight:bold;}
            .green{color: green; font-weight: bold;}
            table{
                width: 100%;
                border-collapse:collapse;
                background:white;
                margin-bottom:30px;
            }

            th{
                background:darkblue;
                color:white;
                padding:12px;
                text-align: left;
            }

            td{
                padding: 10px 12px;
                border-bottom : 1px solid lightgray;
                font-size: 14px;
            }

            .err-msg{color:red;}
            .green-msg{
                color:green;
                text-align:center;
                padding:20px;
                font-weight:bold;
            }
        </style>
    </head>
    <body>
        <h1>Test Failure Report</h1>
        <div class="summary-box">
            <p>Generated On:<strong>${currentTime}</strong></p>
            <p>Total Tests Run:<strong>${totalCount}</strong></p>
            <p>Passed: <strong class="green">${passCount}</strong></p>
            <p>Failed: <strong class="red">${failCount}</strong></p>
            <p> Pass Rate: <strong>${passPercent}%</strong></p>
        </div>

        <h2>Failed Tests</h2>
        <table>
            <thead>
                <tr>
                    <th>Test Name</th>
                    <th>Error message</th>
                </tr>
            </thead>

            <tbody>
                ${tableRows}
            </tbody>
        </table>

        <h2>Run summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Passed</th>
                    <th>Failed</th>
                    <th>Pass rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${currentTime}</td>
                    <td>${totalCount}</td>
                    <td class="green">${passCount}</td>
                    <td class="red">${failCount}</td>
                    <td>${passPercent}</td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>`

    //save the report in file
    fs.writeFileSync(reportPath,reportContent)
    console.log('Report ready:', reportPath)
    console.log('Total:', totalCount, '|Passed:', passCount, '|Failed:', failCount)

    