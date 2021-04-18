require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDialect = process.env.DB_DIALECT;

module.exports = {
  development: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: dbHost,
    dialect: dbDialect,
  },
  test: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: dbHost,
    dialect: dbDialect,
  },
  production: {
    username: dbUser,
    password: dbPass,
    database: dbName,
    host: dbHost,
    dialect: dbDialect,
  },
};
