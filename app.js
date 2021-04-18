require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.SERVER_PORT || 8001;

app.use(express.json());
app.use(morgan("combined"));

const StudentRoute = require("./routes/StudentRoute");

app.use("/student", StudentRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
