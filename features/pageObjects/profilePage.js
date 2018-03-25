import { config } from '../wdio.conf';
 
class MyProfilePage {
    getMyProfilePageUrl() {
        return browser.getUrl();
}
}
export default MyProfilePage;