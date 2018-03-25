import { config } from '../wdio.conf';
 
class MyProfilePage {
    getMyProfilePageUrl() {
        return browser.getUrl('https://calendar.google.com/calendar/r');
}
}
export default MyProfilePage;