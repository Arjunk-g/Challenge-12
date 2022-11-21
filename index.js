const inquirer = require("inquirer");
const connection = require("./db/connections");
const createTable = require('console.table');
// const mysql = require("mysql2");  

// shallWeBegin();

connection.connect((err) => {
    if(err) throw err;
    console.log("Youve been connected to the database");
    shallWeBegin();
});



shallWeBegin = () => {
inquirer
.prompt({
    type: 'list',
    choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role"
    ],
    message: 'Choose what youd like to do: ',
    name: 'title'
})
    .then((response) =>{

        switch(response.title){
        case "view all departments":
        departments();
         break;
        case "view all roles":
        roles();
        break;
        case "view all employees":
        employees();
        break;
        case "add a department":
        plusDepartments();
        break;
        case "add a role":
        plusRoles();
        break;
        case "add an employee":
        plusEmployees();
        break;
        case "update an employee role":
        updateEmployees();
        break;
        default:
        exit();
            console.log(response.title);
    }
});
    }



    
//viewings



    departments = () => {
        return connection.query("SELECT * FROM department", function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    };

    roles = () => {
        return connection.query("SELECT * FROM role", function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    };

    employees = () => {
        return connection.query("SELECT * FROM employee", function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    };




    // connection.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     con.query(sql, function (err, result) {
    //       if (err) throw err;
    //       console.log("Result: " + result);
    //     });
    //   });








    //   .catch((err) => {console.log("This bruh")}))
    // console.table([
    //     { a: 1, b: 2 }, 
    //     { a: 3, b: 7, c: 'y' }
    // ]);
    






// const questions = [{
//               type: 'input',
//               message: 'What is the title of your project?',
//               name: 'title',
//             },
//             {
//               type: 'input',
//               message: 'Description section of your project:',
//               name: 'description',
//             },
//             {
//                 type: 'confirm',
//                 message: 'Would you like a table of contents?',
//                 name: 'tableOC',
//               },
//               {
//                 type: 'confirm',
//                 message: 'instillation section:',
//                 name: 'installSection',
//               },
//           ]
    


















// console.log('this is the table');
// begin()

// createTable.use((req, res) => {
//     res.status(404).end();
//   });
  

  


// inquirer
// .prompt(questions)
//     .then((response) =>
//       .catch((err) => {console.log("This bruh")}))








// const questions = [{
    //           type: 'input',
    //           message: 'What is the title of your project?',
    //           name: 'title',
    //         },
    //         {
    //           type: 'input',
    //           message: 'Description section of your project:',
    //           name: 'description',
    //         },
    //         {
    //             type: 'confirm',
    //             message: 'Would you like a table of contents?',
    //             name: 'tableOC',
    //           },
    //           {
    //             type: 'confirm',
    //             message: 'instillation section:',
    //             name: 'installSection',
    //           },
    //           {
    //             type: 'confirm',
    //             message: 'Would you like to include usage information?',
    //             name: 'usageInfo',
    //           },
    //           {
    //             type: 'confirm',
    //             message: 'Add to contribution guidlines?',
    //             name: 'contGL',
    //           },  
    //         {
    //           type: 'input',
    //           message: 'Test Instructions:',
    //           name: 'testInstructions',
    //         },
    //       ]
    