Feature: Login page

    Feature As a user I want to able to login into the application
    
Scenario: Login with valid credentials 
Given I navigate to the application 
When I write correct username and password 
# And I click "Sign in" button 
# Then The user is logged in and redirected to "Home" page


# Scenario Outline: Login with invalid credentials
# Given I navigate to the application 
# When I write <username> as username 
# And <password> as password 
# Then User is not logged in 
# And The login error message is displayed successfully 

# Examples:
#     | username | password |
#     | incorrect | incorrect   |
#     | Allie2    | incorrect   |  
#     | incorrect | s3cret      | 
#     |           |             |
#     |           | s3cret      |
#     |           | incorrect   | 
#     | incorrect |             | 

# Scenario: Check if the validation errors are displayed 
# Given I navigate to the application 
# When I click on "Sign in" button 
# And I input only one letter in the password field 
# And I click again "Sign in" button 
# Then Both validation errors are displayed

# Scenario: Check if the correct elements are displayed in the page 
# Given I navigate to the application 
# When I observe the login page 
# Then The correct elements are displayed in the page 

# Scenario: Check the functionality of the "Remember me" checkbox
# Given I navigate to the application 
# When I click on "Remember me" button 
# Then The checkbox is checked successfully 
# And The checkbox is unchecked if I click again on "Remember me" button

# Scenario: Check if the functionality of "Don't have an account" button
# Given I navigate to the application 
# When I click "Don't have an account" button 
# Then I've been redirected to "SignUp" page 

