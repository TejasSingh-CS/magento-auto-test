Feature: User Registration

  Scenario: User successfully registers with valid details
    Given the user is on the Sign-Up page
    When the user enters valid details
    Then a new account is created, and the user is logged in

  Scenario: User tries to register with an existing email
    Given the user is on the Sign-Up page
    When the user enters details with an existing email
    Then an error message displays indicating the email is already registered
