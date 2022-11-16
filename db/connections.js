const mysql = require("mysql2");
const { throwError } = require("rxjs");
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:""
})

connection.connect(function (err){
    if(err) throw err
})

module.exports = connection