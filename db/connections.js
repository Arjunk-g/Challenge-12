// const { throwError } = require("rxjs");
// const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");  

const connection = mysql.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"root",
    database:"employees_db"
},
 console.log(`Connected to the emplyees_db database.`)
);

// connection.connect((err) => {
//     if(err) throw err;
//     console.log("Is this your card?");
  
//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);

// })
// shallWeBegin();
// }
// )


// connection.connect(function (err){
//     if(err) throw err;
//     console.log("Is this your card?");
//     showTheTable();
// });

// connection.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

module.exports = connection