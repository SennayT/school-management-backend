const { Student } = require("../db/models");
const bcrypt = require("bcrypt");

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let student = await Student.findAll({
      where: {
        email,
      },
    });

    if (student.length === 0) {
      return res.status(404).json({
        error: "Invalid Email or password",
      });
    }

    const match = await bcrypt.compare(password, student[0].password);

    if (!match) {
      return res.status(404).json({
        error: "Invalid Email or password",
      });
    }

    const token = await student[0].generateToken();
    const { id, fName } = student[0];

    return res.json({
      id,
      fName,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(404).send("server error");
  }
};

module.exports = LoginController;
