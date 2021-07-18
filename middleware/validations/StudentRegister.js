const Joi = require("joi").extend(require('@joi/date'))

const schema = Joi.object({
    fName: Joi.string().required(),
    mName: Joi.string().required(),
    lName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    birthdate: Joi.date().format("YYYY-MM-DD").required(),

    //imageAddress: Joi.string().required(),
});


module.exports = schema;
