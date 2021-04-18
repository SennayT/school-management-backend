const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const { error, value } = schema.validate({
  email: "wsgmail.com",
  password: "pass",
});

if (error) {
  console.log(error.details[0].message);
}
