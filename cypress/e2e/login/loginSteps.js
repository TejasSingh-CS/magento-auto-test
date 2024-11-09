import LoginPage from '../../support/page_objects/LoginPage';

const loginPage = new LoginPage();

Given('the user is on the Login page', () => {
  loginPage.visitLoginPage();
});

When('the user enters valid credentials', () => {
  loginPage.enterCredentials('test12@example.com', 'Password123');
  loginPage.submitLogin();
});

When('the user enters an incorrect password', () => {
  loginPage.enterCredentials('test12@example.com', 'WrongPassword');
  loginPage.submitLogin();
});

Then('the user is logged in and navigated to the home page', () => {
  loginPage.verifySuccessfulLogin();
});

Then('an error message displays indicating incorrect credentials', () => {
  loginPage.verifyIncorrectCredentialsError();
});
