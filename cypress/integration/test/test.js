import { After, And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given("I navigate to a website", () => {
    cy.visit("/")
})