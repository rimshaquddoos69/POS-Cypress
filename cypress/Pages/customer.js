class CustomerPage {

  customersMenu = '#tooltip-anchor-Customers'
  addCustomerBtn = 'button:contains("Add Customer")'

  firstNameInput = 'input[name="firstName"]'
  lastNameInput = 'input[name="lastName"]'
  emailInput = 'input[name="email"]'
  phoneInput = 'input[name="phone"]'

  saveBtn = 'button:contains("Save")'
  successToast = '.toast, .alert-success'

  openCustomersPage() {
    cy.get(this.customersMenu).should('be.visible').click()
  }

  clickAddCustomer() {
    cy.contains('button', 'Add Customer').click()
  }

  fillCustomerForm(firstName, lastName, email, phone) {
    cy.get(this.firstNameInput).type(firstName)
    cy.get(this.lastNameInput).type(lastName)
    cy.get(this.emailInput).type(email)
    cy.get(this.phoneInput).type(phone)
  }

  saveCustomer() {
    cy.contains('button', 'Save').click()
  }

  verifyCustomerAdded() {
    cy.get(this.successToast).should('be.visible')
  }
}

export default CustomerPage
