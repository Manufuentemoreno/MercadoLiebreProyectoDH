const { Router } = require("express");
const express = require("express");
const mainController = require("../controllers/mainController.js");

let router = express.Router();

router.get("/", mainController.home);
router.get("/CreaTuCuenta", mainController.createProfile);
router.get("/vender", mainController.newProduct)
router.get("/login", mainController.logIn)

module.exports = router;