# Project Name: magento_auto_test
This project automates testing of the Magento website (https://magento.softwaretestingboard.com/) using Cypress with BDD (Behavior-Driven Development) and POM (Page Object Model).

https://github.com/user-attachments/assets/0f3fda5e-2ae4-4965-8f11-52e65da06ddc

## Project Details

This project uses:
- **Cypress** for end-to-end testing.
- **BDD (Cucumber)** to structure test cases in feature files.
- **Page Object Model (POM)** to maintain clean and maintainable code by abstracting page interactions.

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

#### cypress/e2e/: Contains test files organized by feature (e.g., `login` and `signUp`).
  - **login**:
    - `loginSteps.js`: Step definitions for the login BDD scenarios in `login.feature`.
  - **signUp**:
    - `signUpSteps.js`: Step definitions for the sign-up BDD scenarios in `signUp.feature`.
  - **login.feature**: Contains BDD scenarios for testing the login flow.
  - **signUp.feature**: Contains BDD scenarios for testing the sign-up flow.

#### cypress/fixtures/: Contains JSON files with test data.
  - `credentials.json`: Stores user credentials and other reusable test data.

#### cypress/support/: Includes support files and helper functions.
- **page_objects**: Houses page object files, each encapsulating functions for interacting with a specific page.
    - `LoginPage.js`: Contains methods to interact with elements on the login page.
    - `SignUpPage.js`: Contains methods to interact with elements on the sign-up page.
- `commands.js`: Defines custom Cypress commands that can be reused across tests.

#### node_modules/: Contains all the project’s npm dependencies.

#### .gitignore: Lists files and folders to be ignored by Git, preventing them from being tracked in version control.

#### cypress.config.js: Cypress configuration file where you can set up various options for Cypress testing.

#### package-lock.json: Ensures consistent versions of dependencies are installed.

#### package.json: Lists project dependencies, scripts, and metadata.

#### README.md: Provides documentation and an overview of the project.

### Cypress Cucumber Preprocessor
> npm i -D cypress cypress-cucumber-preprocessor

> npm install --save-dev cypress-cucumber-preprocessor

> for more info https://www.npmjs.com/package/cypress-cucumber-preprocessor

### Cypress cypress-mochawesome-reporter

> npm i --save-dev cypress-mochawesome-reporter

> npm install cypress-on-fix

> npm install @bahmutov/cypress-esbuild-preprocessor --save-dev

> npm install @badeball/cypress-cucumber-preprocessor --save-dev

> for more info https://www.npmjs.com/package/cypress-mochawesome-reporter

### How to run ?
Once repository is cloned then open in code editor and Install all the dependecies:
> npm install

To open Cypress To open Cypress, run, below command will open the Cypress test runner.
> npx cypress open

In case any of the items are not clear or if you want more information about something, please feel free to get in touch with me.
