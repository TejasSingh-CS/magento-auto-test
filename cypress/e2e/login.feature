Feature: User Login

Scenario: User successfully logs in with valid credentials
    Given the user is on the Login page
    When the user enters valid credentials
    Then the user is logged in and navigated to the home page

Scenario: User tries to log in with an incorrect password
    Given the user is on the Login page
    When the user enters an incorrect password
    Then an error message displays indicating incorrect credentials
