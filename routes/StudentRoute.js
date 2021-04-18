const express = require("express");

const router = express.Router();

const Auth = require("../middleware/Auth");
const LoginController = require("../controllers/LoginController");
const ValidateLogin = require("../middleware/ValidateLogin");

router.post("/login", [ValidateLogin], LoginController);

module.exports = router;
