class Auth {
  constructor() {
    this.authenticated = false
  }

  login(cb) {
    this.authenticated = true
    localStorage.removeItem("@portalhub/isLogged?")
    localStorage.setItem("@portalhub/isLogged?", true)
    cb()
  }

  logout(cb) {
    this.authenticated = false
    localStorage.removeItem("@portalhub/isLogged?")
    localStorage.setItem("@portalhub/isLogged?", false)
    cb()
  }


  isLogged() {
    let result = localStorage.getItem("@portalhub/isLogged?")
    return result
  }
}

export default new Auth()