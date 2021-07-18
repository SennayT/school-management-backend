const express = require("express");

const router = express.Router();

const Auth = require("../middleware/Auth");
const LoginController = require("../controllers/LoginController");
const RegisterController = require('../controllers/RegisterController')
const Validate = require("../middleware/ValidationMiddleware");
const LoginSchema = require("../middleware/validations/StudentLogin");
const RegisterSchema = require('../middleware/validations/StudentRegister')

router.post("/login",[Validate(LoginSchema)], LoginController);
router.post('/register',[Validate(RegisterSchema)],RegisterController);

const checkAuth = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  next();
};

router.get("/", [Auth],(req, res) => {
  res.send("hi");
});

module.exports = router;
