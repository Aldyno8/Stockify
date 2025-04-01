const express = require("express");
const userController = require("../controllers/auth-controller");
const router = express.Router();

router.post("api/auth/signup", userController.signup);
router.post("api/auth/login", userController.login);
