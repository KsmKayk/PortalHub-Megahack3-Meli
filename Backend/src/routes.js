const { Router } = require("express");
const userController = require("./Controllers/userController.js")

const routes = Router();

routes.get("/users", userController.index)
routes.post("/users", userController.store)

module.exports = routes;