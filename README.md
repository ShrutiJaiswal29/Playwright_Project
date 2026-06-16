##Parabank playwright automation
A test automation project built using playwright and typescript for the ParaBank demo application.

##What this project covers
-> UI testing for account creation and fund transfer
->API testing for account validation and balance checks
->End to end hybrid tests combining UI and API
->Performance checks for page load and API response time
->AI based failure analysis report generation

##Tech Stack
->Playwright with typescript
->Page object model pattern
->Allure and HTML reporting
->Github actions for CI/CD

##Project Structure
Playwright_Project/
|- .github/workflows/
   -playwright.yml          CI/CD pipeline
|- pages/                   page object classes
   -LoginPage.ts
   -RegisterPage.ts
   -OpenAccountPage.ts
   -TransferFundsPage.ts
   -AccountsOverviewPage.ts
|- tests/
   - api/                   API test cases
       -accountAPI.spec.ts
       -accountDetailsAPI.spec.ts
       -balanceValidationAPI.spec.ts
       -loginAPI.spec.ts
       -transferValidationAPI.spec.ts
       -validateAccountAPI.spec.ts
   - e2e/                 hybrid end to end tests
       -createAccountHybrid.spec.ts
       -transferHybrid.spec.ts
   - performance-lite/    performance checks
       -performance.spec.ts
   - ui/                  UI test cases
       -accountsPverview.spec.ts
       -login.spec.ts
       -negativeTransfer.spec.ts
       -openAccountPage.ts
       -register.spec.ts
       -registerNegative.spec.ts
       -transferFunds.spec.ts
|- fixtures/
   -apiFixture.ts          API base url fixture
|- utils/
   -dataGenerator.ts      random test data generator
   -failureAnalysis.js    failure report generator
   -logger.ts             central logger
|- test-data/
   -accounts.csv
   -transfer-data.json
   -userData.json
|- config/
   -env.ts
|- api/
   -AccountAPI.ts
|- docs/
|- failure-analysis-report.html
|- mcp.config..json
|- playwright.config.ts
|- package.json



##How to install
npm install
npx playwright install

##How to run tests
```bash
npm test
npm run test:ri
