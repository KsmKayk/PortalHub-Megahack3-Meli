const { Router } = require("express");
const userController = require("./Controllers/userController.js")
const courierController = require("./Controllers/courierController")
const authController = require("./Controllers/authController")

const routes = Router();

routes.get("/users", userController.index)
routes.post("/users", userController.store)
routes.get("/couriers", courierController.index)
routes.post("/couriers", courierController.store)
routes.post("/auth", authController.store)

module.exports = routes;