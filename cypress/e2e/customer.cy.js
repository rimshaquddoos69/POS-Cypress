
import LoginPage from '../Pages/login'
import CustomerPage from '../Pages/customer'

describe('Customer Module', () => {

  const loginPage = new LoginPage()
  const customerPage = new CustomerPage()

  beforeEach(() => {
    loginPage.login()
  })


  it('Add new customer', () => {
    
    const custEmail = `qa_${Date.now()}@test.com`

    customerPage.openCustomersPage()
    customerPage.clickAddCustomer()
    customerPage.fillCustomerForm(
      'Rimsha',
      'Individual',
      custEmail,
      '126054434'
    )
    customerPage.saveCustomer()
    customerPage.verifyCustomerAdded()
  })
})
