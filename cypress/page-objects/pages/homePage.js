import BasePage from "./basePage";

export default class HomePage extends BasePage{
    getUserDropDownTab() {
        return super.getSelector("span[class='oxd-userdropdown-tab']")
    }
}