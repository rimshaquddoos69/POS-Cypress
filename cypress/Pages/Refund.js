class RefundPage {

 
  salesHistoryUrl = '/sales/sales-history'
  tableResponsive = '.table-responsive'

  refundButton = 'button:contains("Refund")'
  fullyRefundedMsg = '.pb-5.pt-2.fs-4'

  itemsCheckbox = 'input.form-check-input[name="items"]'

  paymentMethodDropdown1 = '.Refund_paymentType__gFocs'
  paymentMethodValue = '.react-select-container__control'
  paymentMethodDropdown2= '.Refund_bank__gFocs(1)'
  reactSelectOption = 'div.react-select-container__option'

  refundBtn = '.px-5.py-2.mt-2.btn.btn-primary'

 

  openSalesHistory() {
    cy.visit(this.salesHistoryUrl)
  }

  scrollTableToRight() {
    cy.get(this.tableResponsive).then($el => {
      $el[0].scrollLeft = $el[0].scrollWidth
    })
  }

  clickFirstRefund() {
    cy.get(this.refundButton).eq(0).click()
  }

  checkFullyRefunded() {
    return cy.get(this.fullyRefundedMsg).then($msg => {
      if ($msg.text().includes('The Sales Order has been fully refunded.')) {
        cy.log($msg.text())
        return true
      }
      return false
    })
  }

  selectAllItems() {
    cy.get(this.itemsCheckbox).each($cb => {
      cy.wrap($cb).check({ force: true })
    })
  }

  selectTransferMethod() {
   cy.get(this.paymentMethodDropdown1).find(this.paymentMethodValue).click()


    cy.contains(this.reactSelectOption, 'Transfer').click()
  }

  selectSecondDropdownOption() {
    cy.get(this.paymentMethodDropdown2).first() .click()

  }

  clickRefundBtn() {
    cy.get(this.refundBtn).scrollIntoView().click()
  }

  completeRefundFlow() {
    this.scrollTableToRight()
    this.clickFirstRefund()

    cy.get('body').then($body => {
      if ($body.find(this.fullyRefundedMsg).length > 0 &&
          $body.find(this.fullyRefundedMsg).text().includes('The Sales Order has been fully refunded.')) {
        cy.log('Sales order is fully refunded')
      } else {
        this.selectAllItems()
        this.selectTransferMethod()
        this.selectSecondDropdownOption()
        this.clickRefundBtn()
      }
    })
  }
}

export default RefundPage
