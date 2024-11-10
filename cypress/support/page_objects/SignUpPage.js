class SignUpPage {
  visitSignUpPage() {
    cy.visit('/customer/account/create/');
  }

  fillSignUpForm(firstName, lastName, email, password, confirmPassword) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(confirmPassword);
  }

  submitForm() {
    cy.get('button[title="Create an Account"]').click();
  }

  verifySuccessfulRegistration() {
    cy.contains('Thank you for registering').should('be.visible');
  }

  verifyEmailAlreadyRegisteredError() {
    cy.contains('There is already an account with this email').should('be.visible');
  }

  verifyMandatoryFieldErrors() {
    cy.wait(2000);
    cy.get('#firstname-error').should('be.visible').and('contain', 'This is a required field.');
    cy.get('#lastname-error').should('be.visible').and('contain', 'This is a required field.');
    cy.get('#email_address-error').should('be.visible').and('contain', 'This is a required field.');
    cy.get('#password-error').should('be.visible').and('contain', 'This is a required field.');
    cy.get('#password-confirmation-error').should('be.visible').and('contain', 'This is a required field.');
  }

  verifyEmailFormatError() {
    cy.get('#email_address-error').should('be.visible').and('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).');
  }

  // verifyPasswordStrength(strength) {
  //   cy.get('.password-strength-meter').should('contain', `Password Strength: ${strength}`);
  // }

    verifyPasswordStrength(type) {
      cy.get('#password-strength-meter-label')
      .should('be.visible')
      .and('contain.text', type);    
  }

  verifyPasswordMismatchError() {
    cy.get('#password-confirmation-error').should('be.visible').and('contain', 'Please enter the same value again.');
  }

  fillEmail(email) {
    cy.get('#email_address').type(email);
  }

}

export default SignUpPage;
