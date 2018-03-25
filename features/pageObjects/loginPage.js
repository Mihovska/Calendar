import { config } from '../wdio.conf';

const USERNAME = '#username';
const PASSWORD = '#password';
const SUBMIT = '#submitButton';


class LoggingPage {
    goToLoginPage() {
        return browser.url('/login/');
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
