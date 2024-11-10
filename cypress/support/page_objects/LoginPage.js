class LoginPage {
    visitLoginPage() {
      cy.visit('/customer/account/login/');
    }
  
    enterCredentials(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
    }
  
    submitLogin() {
      cy.get('#send2').click({force:true});
    }
  
    verifySuccessfulLogin() {
      cy.contains('Account Information').should('be.visible');
    }
  
    verifyIncorrectCredentialsError() {
      cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
    }
  }
  
  export default LoginPage;
  