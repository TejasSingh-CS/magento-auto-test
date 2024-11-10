# Project Name: magento_auto_test
This project will automate the process of creating an account on the website https://magento.softwaretestingboard.com/ and signing in with that account.

### Prerequisites
To run this project on your machine, please make sure you have the following installed:

* Node.js (version 12.x or higher)
* Git for version control
* Cypress (version 10.x or higher)

### Getting Started
1. Clone the repository

2. Open your terminal and run:
> git clone https://github.com/your-username/cypress_ecommerce.git

3. Move into project directory
> cd magento-auto-test

4. Dependencies Setup - Install all the dependencies using following command:
> npm install

5. To open Cypress To open Cypress, run, below command will open the Cypress test runner.
> npx cypress open

6. Run test - To run test suite, simply:
Open the E2E Testing in Cypress Dashboard. Choose browser of your choice; here, Chrome. Click on the test file to run it, or run all tests at once.

### Project Structure
cypress/: This is the root directory for all Cypress-related files and folders.

#### cypress/e2e/: Contains test files that perform automation tests.
* amazonTests/amazonCase.spec.cy.js: This file includes test cases specific to Amazon's website or features.
* backendTests/restAPICases.spec.cy.js: This file contains API testing cases for backend services.

#### cypress/fixtures/: Stores test data in JSON format, which can be used in your tests.
* product_data.json: Holds data related to products used in frontend tests, especially from amazonCase.spec.cy.js.
* credentials.json: Stores credentials or any sensitive data needed for tests.

#### cypress/pageObjects/: Contains page object files, which follow the Page Object Model design pattern.
* AmazonSearchPage.js: Contains methods and selectors for interacting with the Amazon search page.
* ProductPage.js: Contains methods and selectors for interacting with the product detail page.

#### cypress/reports/: This folder holds the generated reports.
* html/: Contains HTML reports generated from test runs.

#### cypress/support/: Includes support files and helper functions.
* commands.js: Defines custom commands that can be used across test files.
* e2e.js: Contains global configuration and behavior for Cypress, such as hooks or custom setups.

#### node_modules/: Contains all the project’s npm dependencies.

#### .gitignore: Lists files and folders to be ignored by Git, preventing them from being tracked in version control.

#### cypress.config.js: Cypress configuration file where you can set up various options for Cypress testing.

#### package-lock.json: Ensures consistent versions of dependencies are installed.

#### package.json: Lists project dependencies, scripts, and metadata.

#### README.md: Provides documentation and an overview of the project.

### Mochawesome Report
> npm i --save-dev cypress-mochawesome-reporter

for more info follow this url https://www.npmjs.com/package/cypress-mochawesome-reporter
After each execution, a report will be generated at this path: '\cypress tutorial\cypress_ecommerce\cypress\reports'. If any test cases fail, a screenshot will also be generated in the same path.

### Cypress Cucumber Preprocessor
npm i -D cypress cypress-cucumber-preprocessor
npm install --save-dev cypress-cucumber-preprocessor

for more info https://www.npmjs.com/package/cypress-cucumber-preprocessor

### How to run ?
Once repository is cloned then open in code editor and Install all the dependecies:
> npm install

To open Cypress To open Cypress, run, below command will open the Cypress test runner.
> npx cypress open

Run Headless browser to generate reports for fontend and backend.
> npx cypress run

In case any of the items are not clear or if you want more information about something, please feel free to get in touch with me.
