require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

try {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4ODM3NjQyfQ.ASLuPlJltAjb0PIRFx3xL5V9H4fG3aGl9xRLJbcJOFc";

  var { id } = jwt.verify(token, "secret");

  console.log(id);
} catch (error) {
  console.log("Exception", error);
}
