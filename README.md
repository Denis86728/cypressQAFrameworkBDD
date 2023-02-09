# ar-qa-automation
This is a repository which contains the automation tests for AR project.

Setup: 
1. Clone the project on you're local machine 
2. Open the terminal on you're IDE and run the following command: 
   - npm install cypress 
   - npm install cypress-cucumber-preprocessor
3. In order to run the tests in cypress modal use:
   - npm run cy:open 
4. In order to run the tests only in headless mode use: 
   - npm run cy:run 
5. Commands scripts can be found in the following file:
   -> package.json 
6. By default the tests were created to be runned on "DEV" environment, but it can be changed to run on "UAT" or "PROD" environment from config.js file by updating the "environment" variable. Also, in order to run the tests on another environment than "DEV" the "captcha" functionality from the "UAT" or "PROD" needs to be deactivated, otherwise the tests will fail.
7. For every change made in the framework:
 - create you're own branch 
 - add the modifications 
 - commit them 
 - create a PR and wait for a reviewer to approve the PR in order to be merged 
   
Docs: 
Gherkin: 
https://cucumber.io/docs/gherkin/reference/
Cucumber: 
https://cucumber.io/docs/cucumber/
Cypress:
https://docs.cypress.io/
  
  

