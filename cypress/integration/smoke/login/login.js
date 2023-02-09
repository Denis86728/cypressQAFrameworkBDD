import { After, And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given("I navigate to the application", () => {
    cy.visit("/")
})
When("I write correct username and password", () => {
    
})