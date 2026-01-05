import LoginPage from '../Pages/login'

describe('Login Module', () => {

  const loginPage = new LoginPage()

  it('Login with valid staging credentials', () => {
    loginPage.login()
  })
})
