class LoginPage {
    visitLoginPage() {
      cy.visit('/customer/account/login/');
    }
  
    enterCredentials(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
    }
  
    submitLogin() {
      cy.get('button[title="Sign In"]').click();
    }
  
    verifySuccessfulLogin() {
      cy.contains('Welcome,').should('be.visible');
    }
  
    verifyIncorrectCredentialsError() {
      cy.contains('The account sign-in was incorrect or your account is disabled.').should('be.visible');
    }
  }
  
  export default LoginPage;
  