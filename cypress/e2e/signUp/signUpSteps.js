import SignUpPage from '../../support/page_objects/SignUpPage';

const signUpPage = new SignUpPage();

Given('the user is on the Sign-Up page', () => {
  signUpPage.visitSignUpPage();
});

When('the user enters valid details', () => {
  signUpPage.fillSignUpForm('Test', 'Lee', 'test12@example.com', 'Password123', 'Password123');
  signUpPage.submitForm();
});

When('the user enters details with an existing email', () => {
  signUpPage.fillSignUpForm('Grey', 'Ghim', 'existinguser@example.com', 'Password123', 'Password123');
  signUpPage.submitForm();
});

Then('a new account is created, and the user is logged in', () => {
  signUpPage.verifySuccessfulRegistration();
});

Then('an error message displays indicating the email is already registered', () => {
  signUpPage.verifyEmailAlreadyRegisteredError();
});
