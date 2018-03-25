import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
chai.should();
import LoginPage from '../pageObjects/LoginPage';
import MyProfilePage from '../pageObjects/MyProfilePage';
 
const loginPage = new LoginPage();
const profilePage = new MyProfilePage();
 
module.exports = function () {
    this.Given('I am on the Google Calendar login page', () =>
        loginPage.goToLoginPage()
    );
 
    this.When('I fill in "Email" with', () =>
        loginPage.typeUsername('apptestautomation7@gmail.com')
    );

    this.And('I press "Next"', () =>
        loginPage.submit()
    );
    this.And('I fill in "Password" with', () =>
        loginPage.typePassword('Nighthawk_f22')
    );

    this.And('I press "Next"', () =>
        loginPage.submit()
    );
    
    this.Then('I should be redirected to my profile page', () =>
        profilePage.getProfilePageUrl().then(currentUrl => currentUrl.should.contain('https://calendar.google.com/calendar/r')
    ));

};















/* var {defineSupportCode} = require('cucumber');
//const expect = require('chai').expect;


defineSupportCode(function({ Given, Then, When }) {
    Given('I am on the Google Calendar login page', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      When('I fill in {string} with {string}', function (string, string2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      When('I press {string}', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      When('I fill in {string} with {string}', function (string, string2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      When('I press {string}', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      Then('I should be on my Calendar home page', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });
    }); */