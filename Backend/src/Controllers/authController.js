const { store } = require("./userController");

module.exports = {
  async store(req, res) {
    const {Email, Password} = req.body

    return res.json("accepted")
  }
}