Feature: Login Authentication

Background:
    Given User navigates to saucedemo website

    Scenario: Standard Login  
        And User enter the username as "amandaptrk"
        And User enter the password as "Password1234"
        When User click on the login button
        Then Login should be success

    Scenario: Locked out User Login
        Given User enter the username as "amandaptrk10"
        Given User enter the password as "Pass1234"
        When User click on the login button
        Then Login should be fail
        And User see locked alert message

    Scenario: User not found Login
        Given User enter the username as "amandaptrk10"
        Given User enter the password as "Pass1234"
        When User click on the login button
        Then Login should be fail
        And User see unmatched alert message
