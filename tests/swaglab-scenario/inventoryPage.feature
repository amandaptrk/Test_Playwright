Feature: Inventory page functionality

Background:
    Given User navigates to saucedemo website
    Given User successfully login

    Scenario: User want to add item to cart 
        And User click on the login button
        And User click on add to cart button
        Then The cart button changed to remove button
        And Cart number icon will show up

    Scenario: User want to sort products from least to most expensive
        Given User click the sort dropdown
        And User choose Price (low to high) 
        Then Sauce Labs Fleece Jacket will be the last on the list

    Scenario: User want to remove item added to cart
        Given User click the add to cart button
        And User click the remove button
        Then the remove button will changed to Add to cart button
        And Cart number icon will be deducted

    Scenario: User want to see product details
        Given User click teh product title
        And User directed to selected product detail page
        Then User will see the selected product detail
        And User can add the item to cart
        * User can go back to product page

    Scenario: User want to go to my cart page
        Given User click the cart icon
        Then User will see all the item added to cart
        