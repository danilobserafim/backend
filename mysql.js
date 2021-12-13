const mysql = require("mysql")
var login = require("./config/login.json")

const pool = mysql.createPool({
    "user": "3463659_usuario",
    "password": "Senha1973",
    "database": "3463659_usuario",
    "host": "fdb24.awardspace.net",
    "port": 3306,
    "version": 5.7
})

exports.pool = pool

