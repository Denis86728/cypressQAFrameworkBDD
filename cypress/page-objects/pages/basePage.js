export default class BasePage {
	static wait(ms) {
		cy.wait(ms)
	}
	static logInfo(message) {
		cy.log(message)
	}
	//Handing the device emulation
	static setMobileViewPort() {
		cy.viewport('iphone-x')
	}
	static setTabletViewPort() {
		cy.viewport('ipad-2')
	}
	static setDesktopViewPort() {
		cy.viewport('macbook-13')
	}
	static setLargeDesktopViewPort() {
		cy.viewport(1920, 1080)
	}

	assertAdminUrl(adminPageURL) {
		cy.assertAdminUrl(adminPageURL)
	}
}
