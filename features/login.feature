Feature: Login to my Calendar
 In order to use my calendar
 As a registered user
 I want to sign in to my Google Calendar
 So that I can check events and meetings
  

 Scenario: Login with valid credentials
  Given I am on the Google Calendar login page
   When I fill in "Email" with "apptestautomation7@gmail.com"
   And I press "Next"
   And I fill in "Password" with "Nighthawk_f22"
   And I press "Next"
   Then I should be redirected to my profile page


 Scenario: Login with invalid Email credentials
   Given I am on the Google Calendar login page
    When I fill in "Email" with "test@gmail.com"
    And I press "Next"
    Then I should see error message

  
 Scenario: Login with invalid Password credentials
  Given I am on the Google Calendar login page
   When I fill in "Email" with "apptestautomation7@gmail.com"
   And I press "Next"
   And I fill in "Password" with "Night"
   And I press "Next"
   Then I should see error message
  