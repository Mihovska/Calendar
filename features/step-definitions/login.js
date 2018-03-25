const expect = require('chai').expect;

module.exports = function() {
    Given('I go to the website {string}', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      Then('I expect the title of the page to be {string}', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

    this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
        expect(browser.getTitle()).to.be.eql('Google');
    });
};