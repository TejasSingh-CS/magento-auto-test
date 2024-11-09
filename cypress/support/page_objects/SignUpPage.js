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
  }
  
  export default SignUpPage;
  