const {Sequelize} = require('sequelize')
require('dotenv').config()
const dbUser = process.env.DB_USER
const dbName = process.env.DB_NAME
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const url = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(url)

module.exports = {
    sequelize
}
