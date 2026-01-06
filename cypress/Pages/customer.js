class CustomerPage {


  

  custNameInput = 'input[name="customer_name"]'
  custType='#customer-add-customer-type select'
  custEmailInput = 'input[placeholder="example@mail.com"]'

  phoneInput = 'input[placeholder="+92-3XX-XXXXXXX"]'

  saveBtn = 'button:contains("Save")'
  
  openCustomersPage() {
    
    cy.visit('/customer')
  }

  clickAddCustomer() {
    cy.contains('button', 'Add Customer').click()
  }

  fillCustomerForm(firstName,custType, custEmail, phone) {
    cy.get(this.custNameInput).type(firstName)
      cy.get(this.custType).select(custType) 
    cy.get(this.custEmailInput).type(custEmail)
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
