require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const secret = process.env.JWT_SECRET;
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    }
    if (!token) return res.status(400).send("Access Denied");
  } catch (err) {
    res.status(500).send("Internal Server Error.!!");
    console.error(err.message);
  }
  next();
};
