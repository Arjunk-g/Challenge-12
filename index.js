const inquirer = require("inquirer");
const connection = require("./db/connections");
const createTable = require('console.table');

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

//Adding to the fields

    plusDepartments = () => {
        inquirer.prompt({
            type: 'input',
            message: 'What do you want to call your new department?',
            name: 'departmentBruh'
})
    .then((response) => {
        connection.query(`INSERT INTO department (name) VALUES ('${response.departmentBruh}')`, function (err, result) {
            if (err) throw err;
            console.table(result)
});
    })}

    plusRoles = () => {
        inquirer.prompt({
            type: 'input',
            message: 'What do you want to call your new role?',
            name: 'roleBruh'
})
    .then((response) => {
        connection.query(`INSERT INTO role (name) VALUES ('${response.roleBruh}')`, function (err, result) {
            if (err) throw err;
            console.table(result)
});
    })}

    plusEmployees = () => {
        inquirer.prompt({
            type: 'input',
            message: 'What do you want to call your new role?',
            name: 'employeeBruh'
})
    .then((response) => {
        connection.query(`INSERT INTO role (name) VALUES ('${response.employeeBruh}')`, function (err, result) {
            if (err) throw err;
            console.table(result)
});
    })}
