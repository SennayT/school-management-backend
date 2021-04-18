const LoginController = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  return res.send(`Email ${email}, Password:${password}`);
};

module.exports = LoginController;
