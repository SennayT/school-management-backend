require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.SERVER_PORT || 8001;

app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
