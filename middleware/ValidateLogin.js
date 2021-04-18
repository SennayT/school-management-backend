const Joi = require("joi");

module.exports = function (req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate({
    email: "wsgmail.com",
    password: "pass",
  });

  if (error) {
    return res.status(401).send(error.details[0].message);
  }

  next();
};
