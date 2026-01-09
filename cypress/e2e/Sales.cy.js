
import LoginPage from '../Pages/login'
import SalesPage from '../Pages/sales'

describe('Sales Module', () => {

  const loginPage = new LoginPage()
  const salesPage = new SalesPage()

  beforeEach(() => {
    loginPage.login()
  })

  it('Complete sales flow', () => {

    salesPage.openSalesPage()
    salesPage.selectFirstCard()
    salesPage.openCart()
    salesPage.addMiscItem('Misc', '1', '1000')
    salesPage.selectPayment(3)
    salesPage.sellItems()
    salesPage.handleOpeningBalance()
    salesPage.sellItems()
   
  })
})
