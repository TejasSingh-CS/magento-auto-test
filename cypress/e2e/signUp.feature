Feature: User Registration

  Scenario: User successfully registers with valid details
    Given the user is on the Sign-Up page
    When the user enters valid details
    Then a new account is created, and the user is logged in

  Scenario: User tries to register with an existing email
    Given the user is on the Sign-Up page
    When the user enters details with an existing email
    Then an error message displays indicating the email is already registered

  Scenario: User successfully logs in with created account
    Given the user is on the Login page
    When the user enters newly created account credentials
    Then the user is logged in and navigated to the home page

  Scenario: Click on Create an Account button without filling mandatory fields
    Given the user is on the Sign-Up page
    When the user clicks on the Create an Account button without entering any information
    Then an error message is displayed on each mandatory field

  Scenario: Type an email without the correct format
    Given the user is on the Sign-Up page
    When the user enters an incorrectly formatted email
    Then an error message is displayed indicating an invalid email format

  Scenario: Enter a weak password
    Given the user is on the Sign-Up page
    When the user enters a valid email but a weak password
    Then a warning message is displayed with "Password Strength: Weak"
    
  Scenario: Enter a strong password
    Given the user is on the Sign-Up page
    When the user enters a valid email and a very strong password
    Then a message is displayed indicating "Password Strength: Very Strong"

  Scenario: Mismatched Password and Confirm Password fields
    Given the user is on the Sign-Up page
    When the user enters a mismatched password and confirm password
    Then an error message is displayed indicating that the passwords do not match
