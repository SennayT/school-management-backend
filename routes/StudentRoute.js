const express = require("express");

const router = express.Router();

const Auth = require("../middleware/Auth");
const LoginController = require("../controllers/LoginController");

const Validate = require("../middleware/ValidationMiddleware");

const LoginSchema = require("../middleware/validations/StudentLogin");

router.post("/login", [Validate(LoginSchema)], LoginController);

const checkAuth = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  next();
};

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
