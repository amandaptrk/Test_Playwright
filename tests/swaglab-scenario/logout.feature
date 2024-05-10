Feature: Logut Functionality

Background:
    Given User navigates to saucedemo website
    And User successfully login

    Scenario: User want to Logout
        And User click on the three stripes icon
        And User click Logout
        Then User successfully logged out
