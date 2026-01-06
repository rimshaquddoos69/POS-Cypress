import LoginPage from '../Pages/login'
import RefundPage from '../Pages/Refund'

describe('Refund Module', () => {

  const loginPage = new LoginPage()
  const refundPage = new RefundPage()

  beforeEach(() => {
    loginPage.login()
  })

  it('Perform refund for a sales order', () => {
    refundPage.openSalesHistory()
    refundPage.completeRefundFlow()
  })
})
