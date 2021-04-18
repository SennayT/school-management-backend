module.exports = function (req, res, next) {
  console.log("auth");
  next();
};
