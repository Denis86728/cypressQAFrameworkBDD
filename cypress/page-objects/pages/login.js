export default class Login {
    getUsernameField() {
        return cy.get("#username")
    }
    getPasswordField() {
        return cy.get("#password")
    }
    getSignInButton() {
        return cy.get("button[type='submit']")
    }
    getAppLogo() {
        return cy.get(".makeStyles-logo-3")
    }
    getRememberMeCheckBox() {
        return cy.get(".MuiFormControlLabel-root > span").eq(0)
    }
    getRememberMeButton() {
        return cy.get(".MuiFormControlLabel-root > span").eq(1)
    }
    getDontHaveAccountButton() {
        return cy.get("a[data-test='signup']")
    }

}