import BasePage from "./basePage"

export default class LoginPage extends BasePage{
    getUsernameField() {
        return super.getLocator("#username")
    }
    getPasswordField() {
        return super.getLocator("#password")
    }
    getSignInButton() {
        return super.getLocator("button[type='submit']")
    }
    getSignInLabel() {
        return super.getLocator(".makeStyles-paper-2 > h1")
    }
    getAppLogo() {
        return super.getLocator(".makeStyles-logo-3")
    }
    getRememberMeCheckBox() {
        return super.getLocator(".MuiFormControlLabel-root > span")
    }
    getRememberMeButton() {
        return super.getLocator(".MuiFormControlLabel-root > span").eq(1)
    }
    getDontHaveAccountButton() {
        return super.getLocator("a[data-test='signup']")
    }
    getValidationErrorIcon() {
        return super.getLocator("div[role='alert'] > div").eq(0)
    }
    getValidationErrorMessage() {
        return super.getLocator("div[role='alert'] > div").eq(1)
    }
    getUsernameMandatoryValidationError() {
        return super.getLocator("#username-helper-text")
    }
    getPasswordMandatoryValidationError() {
        return super.getLocator("#password-helper-text")
    }
    getBuildByCypressButton() {
        return super.getLocator(".MuiBox-root.MuiBox-root-15 > div > p")
    }

    assertUiElements(){
        this.getAppLogo().should("be.visible")
        this.getDontHaveAccountButton().should("be.visible")
        this.getSignInLabel().should("be.visible")
        this.getUsernameField().should("be.visible")
        this.getPasswordField().should("be.visible")
        this.getRememberMeCheckBox().should("be.visible")
        this.getRememberMeButton().should("be.visible")
        this.getSignInButton().should("be.visible")
        this.getBuildByCypressButton().should("be.visible")
    }
}