import SignUpPage from '../../support/page_objects/SignUpPage'; 
import LoginPage from '../../support/page_objects/LoginPage';

const signUpPage = new SignUpPage();
const loginPage = new LoginPage();

// Generate a unique email using the current timestamp to ensure a new account each time
const uniqueEmail = `test_${Date.now()}@yopmail.com`;
Cypress.env('uniqueEmail', uniqueEmail); // Store unique email in Cypress environment

Given('the user is on the Sign-Up page', () => {
  signUpPage.visitSignUpPage();
});

Given('the user is on the Login page', () => {
  loginPage.visitLoginPage();
});

When('the user enters valid details', () => {
  /* If you want to create a new account manually, replace "uniqueEmail" with "credentials.newUserEmail"
     Edit "credentials.json" to update "newUserEmail" with a unique email manually each time. */

  cy.fixture('credentials').then((credentials) => {
    signUpPage.fillSignUpForm(credentials.newFirstName, credentials.newLastName, uniqueEmail, credentials.newUserPassword, credentials.newUserPassword);
  });
  signUpPage.submitForm();
});

When('the user enters details with an existing email', () => {
  cy.fixture('credentials').then((credentials) => {
    signUpPage.fillSignUpForm(credentials.firstName, credentials.lastName, credentials.email, credentials.password, credentials.password);
  });
  signUpPage.submitForm();
});

When('the user enters newly created account credentials', () => {
  cy.fixture('credentials').then((credentials) => {
    const savedUniqueEmail = Cypress.env('uniqueEmail'); // Retrieve the unique email from Cypress environment
    loginPage.enterCredentials(savedUniqueEmail, credentials.newUserPassword);
  });
  loginPage.submitLogin();
});

Then('a new account is created, and the user is logged in', () => {
  signUpPage.verifySuccessfulRegistration();
});

Then('an error message displays indicating the email is already registered', () => {
  signUpPage.verifyEmailAlreadyRegisteredError();
});

Then('the user is logged in and navigated to the home page', () => {
  loginPage.verifySuccessfulLogin();
});
