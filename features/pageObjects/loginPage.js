import { config } from '../wdio.conf';

const USERNAME = '#identifierID';
const PASSWORD = '.whsOnd';
const SUBMIT = '#identifierNext';


class LoggingPage {
    goToLoginPage() {
        return browser.url('/http://calendar.google.com');
    }

    login(username, password) {
        return this.typeUsername(username)
            .then(() => this.typePassword(password))
            .then(this.submit);
    }

    typeUsername(username) {
        return browser
            .waitForVisible(USERNAME)
            .setValue(USERNAME, username);
    }

    submit() {
        return browser.click(SUBMIT);
    }
     
    typePassword(password) {
        return browser
            .waitForVisible(PASSWORD)
            .setValue(PASSWORD, password);
    }
     
    submit() {
        return browser.click(SUBMIT);
    }
}

export default LoggingPage;
