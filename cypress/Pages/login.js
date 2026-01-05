class LoginPage {

  emailInput = 'input[name="email"]'
  passwordInput = 'input[name="password"]'
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

    cy.get(this.passwordInput)
      .type(Cypress.env('password'), { log: false })

    cy.get(this.loginBtn).click()

    // Assertion → confirms login success
    cy.get(this.dashboardIdentifier, { timeout: 10000 })
      .should('be.visible')
  }
}

export default LoginPage
