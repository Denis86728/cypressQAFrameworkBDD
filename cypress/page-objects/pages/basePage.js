export default class BasePage {
	 wait(ms) {
		cy.wait(ms)
	}
	 logInfo(message) {
		cy.log(message)
	}
	 navigateToApp(url){
		cy.visit(url)
	}
	getSelector(selector) {
        return cy.get(selector);
    }
    getSelectorByText(text) {
        return cy.contains(text)
    }
	 assertContainsUrl(path) {
		cy.url().should("contain", path);
	}
	  assertEqualsUrl(url) {
		cy.url().should("eq", url);
	}
	  assertIfUserScrolledDown() {
		cy.window().its("scrollY").should("not.equal", 0);
	}
	  assertIfUserScrolledUp() {
		cy.window().its("scrollY").should("equal", 0);
	}
	//Handing the device emulation
	 setMobileViewPort() {
		cy.viewport('iphone-x')
	}
	 setTabletViewPort() {
		cy.viewport('ipad-2')
	}
	 setDesktopViewPort() {
		cy.viewport('macbook-13')
	}
	 setLargeDesktopViewPort() {
		cy.viewport(1920, 1080)
	}
	
}
