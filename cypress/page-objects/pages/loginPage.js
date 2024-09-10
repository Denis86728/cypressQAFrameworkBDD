import BasePage from "./basePage"

export default class LoginPage extends BasePage{
    getUsernameField() {
        return super.getSelector("input[name='username']")
    }
    getPasswordField() {
        return super.getSelector("input[name='password']")
    }
    getSignInButton() {
        return super.getSelector("button[type='submit']")
    }
    getAppLogo() {
        return super.getSelector("div[class='orangehrm-login-logo']")
    }
    getForgotPasswordButton() {
        return super.getSelector("div[class='orangehrm-login-forgot']")
    }
    getUsernameMandatoryValidationError() {
        return super.getSelector("div[class='oxd-form-row'] > div > span").eq(1)
    }
    getPasswordMandatoryValidationError() {
        return super.getSelector("div[class='oxd-form-row'] > div > span").eq(2)
    }
    getSocialMediaButtonByIndex(index){
        return super.getSelector(`div[class='orangehrm-login-footer-sm'] > a:nth-child(${index})`)
    }

    assertUiElements(){
        this.getAppLogo().should("be.visible")
        this.getUsernameField().should("be.visible")
        this.getPasswordField().should("be.visible")
        this.getSignInButton().should("be.visible")
        this.getForgotPasswordButton().should("be.visible")
        for(let i=1; i<=4; i++){
            return this.getSocialMediaButtonByIndex(i).should("be.visible")
        }
    }
}