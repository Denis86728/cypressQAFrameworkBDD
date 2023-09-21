import BasePage from "./basePage";

export default class HomePage extends BasePage{
    getHomeButton(){
        return super.getLocator("a[data-test='sidenav-home']")
    }
}