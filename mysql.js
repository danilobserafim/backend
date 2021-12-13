const mysql = require("mysql")
var login = require("./config/login.json")

const pool = mysql.createPool({
    "user": "id18117535_root",
    "password": "Senh@1973550",
    "database": "id18117535_ecommerce",
    "host": "localhost",
    "port": 3306,
})

exports.pool = pool

