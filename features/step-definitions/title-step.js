const expect = require('chai').expect;

module.exports = function() {
    this.Given(/^I go to the website "([^"]*)"$/, (url) => {
        browser.url("/http://www.google.com");
    });

    this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
        expect(browser.getTitle()).to.be.eql('Google');
    });
};