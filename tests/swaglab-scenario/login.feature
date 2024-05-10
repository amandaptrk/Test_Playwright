Feature: Login Authentication

Background:
    Given User navigates to saucedemo website

    Scenario: Standard Login  
        And User enter the username as "standard_user"
        And User enter the password as "secret_sauce"
        When User click on the login button
        Then Login should be success

    Scenario: Locked out User Login
        Given User enter the username as "locked_out_user"
        Given User enter the password as "secret_sauce"
        When User click on the login button
        Then Login should be fail
        And User see locked alert message

    Scenario: User not found Login
        Given User enter the username as "amanda_user"
        Given User enter the password as "secret_sauce"
        When User click on the login button
        Then Login should be fail
        And User see unmatched alert message
