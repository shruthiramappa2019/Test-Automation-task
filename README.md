# UI Test Automation – LIFT Portal

## Test Framework 
 Test Framework: Playwright Test using JavaScript with POM structure

## Setup
### Requirements
- Node.js : v24.9.0 (Minimum required: v18+)
- Playwright :v1.59.1
- Chromium browser (installed via Playwright)
```
npm install
npx playwright install 
```

## Git repo
```
https://github.com/shruthiramappa2019/Test-Automation-task.git
```

## Project Structure

```
lift_dev_training/
│
├── src/
│   ├── login.page.js        # Login page actions
│   ├── users.page.js        # Users page actions
│
├── tests/
│   ├── login.test.js        # Login test scenarios
│   ├── users.test.js        # User list test
│   ├── bulkUpload.test.js   # Bulk upload test
│
├── test-data/
│   ├── login.testdata.json  # Login test data
│   ├── users.testdata.json  # User data for tests
│   ├── users.csv            # Bulk upload file (35 users)
│
├── playwright.config.js 
├── package.json
└── README.md

```

## Test Execution
```
npm test              # Does not open the browser
npm run test:headed   # Opens the browser
npm run report        # Opens the generated HTML report after execution
```

## Debugging and reporting
- Reports are generated in: ***playwright-report/index.html***
- Screenshots captured on failure
- Video recorded on failure
- Reporting (screenshots/videos/traces) and base URL are configured centrally in playwright.config.js.


## Defects Identified
- two issues were identified during test execution and ticket were created in the github with all details.
- Bulk upload partial failure despite successful user creation - https://github.com/shruthiramappa2019/Test-Automation-task/issues/1
- File upload fails due to invalid or weak row-level data validation - https://github.com/shruthiramappa2019/Test-Automation-task/issues/3
---

## How to Run Tests (For Non-Technical Users)

### Step 1: Download the Project from GitHub

1. Open the repository:  
   https://github.com/shruthiramappa2019/Test-Automation-task
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file on your computer

### Step 2: Open the Project
1. Open the extracted project folder
2. Right-click the folder
3. Select **"New Terminal at Folder"**
```
4. npm install
5. npm run test:headed
6. npm run report
```

## Limitation ##
1. Tests cover mainly the given test flows.
2. Deployment is configured for local/CI only.
3. Bulk upload test cases focus only on successful uploads with fewer than 5 users.

---~~

