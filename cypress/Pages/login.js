class LoginPage {

  emailInput = '#validationCustomEmail'
  passwordInput = '#validationCustomPassword'
  continueBtn= '.w-100.btn.btn-primary'
  loginBtn = 'button[type="submit"]'
  dashboardIdentifier = '#tooltip-anchor-Reports'

  
  visit() {
    cy.visit('/login',{timeout:14000})
  }

  login() {
    this.visit()
    cy.get(this.emailInput)
      .should('be.visible')
      .type(Cypress.env('email'))
    cy.get('.w-100.btn.btn-primary').click()
    cy.get(this.passwordInput)
      .type(Cypress.env('password'))
    cy.get(this.loginBtn).click()

   
    cy.get(this.dashboardIdentifier, { timeout: 10000 })
      .should('be.visible')
  }
}

export default LoginPage
