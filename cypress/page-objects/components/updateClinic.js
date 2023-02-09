export default class UpdateClinic {
  getUpdateInformationButton() {
    return cy.get("button[class='ClockLoggedInBtn']")
  }
  getCloseButton() {
    return cy.get(
      "div[class='UpgradeClinic-modal-wrapper popup-modal-header'] span"
    )
  }
}
