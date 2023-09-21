export default class BasePage {
  wait(ms) {
    cy.wait(ms);
  }
  task(nameTask, query) {
    return cy.task(nameTask, query);
  }
  logInfo(message) {
    return cy.log(message);
  }
  navigateToApp(url) {
    cy.visit(url);
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
    cy.viewport("iphone-x");
  }
  setTabletViewPort() {
    cy.viewport("ipad-2");
  }
  setDesktopViewPort() {
    cy.viewport("macbook-13");
  }
  setLargeDesktopViewPort() {
    cy.viewport(1920, 1080);
  }
  getLocator(locator) {
    return cy.get(locator);
  }
}
