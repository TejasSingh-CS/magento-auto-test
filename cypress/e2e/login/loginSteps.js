import LoginPage from '../../support/page_objects/LoginPage';

const loginPage = new LoginPage();

Given('the user is on the Login page', () => {
  loginPage.visitLoginPage();
});

When('the user enters valid credentials', () => {
  cy.fixture('credentials').then((credentials) => {
    loginPage.enterCredentials(credentials.email, credentials.password);
  });
  loginPage.submitLogin();
});

When('the user enters an incorrect password', () => {
  cy.fixture('credentials').then((credentials) => {
    loginPage.enterCredentials(credentials.email, credentials.invalidPassword);
  });
  loginPage.submitLogin();
});

Then('the user is logged in and navigated to the home page', () => {
  loginPage.verifySuccessfulLogin();
});

Then('an error message displays indicating incorrect credentials', () => {
  loginPage.verifyIncorrectCredentialsError();
});
