//Requiring dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");

//Creating localhost
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Database variable
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});

//Database connection
db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Database connected");
  init();
});

//User prompts
function init() {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "What would you like to do?",
      choices: [
        "view departments",
        "view employees",
        "view roles",
        "add department",
        "add role",
        "add employee",
      ],
    })
    .then(function ({ task }) {
      switch (task) {
        case "view departments":
          viewDepartments();
          break;

        case "view roles":
          viewRoles();
          break;

        case "view employees":
          viewEmployees();
          break;

        case "add department":
          addDepartment();
          break;

        case "add role":
          addRole();
          break;

        case "add employee":
          addEmployee();
          break;
      }
    });
}

//User viewing all departments
function viewDepartments(error) {
  console.log("Currently viewing all departments!");
  if (error) throw error;
  db.query("SELECT * FROM department", function (error, result) {
    if (error) throw error;
    console.table(result);
    init();
  });
}

//User viewing all employees
function viewEmployees(error) {
  console.log("Currently viewing all employees!");
  if (error) throw error;
  db.query("SELECT * FROM employee", function (error, result) {
    if (error) throw error;
    console.table(result);
    init();
  });
}

//User viewing all roles
function viewRoles(error) {
  console.log("Currently viewing all roles!");
  if (error) throw error;
  db.query("SELECT * FROM roles", function (error, result) {
    if (error) throw error;
    console.table(result);
    init();
  });
}

//User can add a department
function addDepartment() {
  console.log("Adding a department!");
  inquirer
    .prompt({
      type: "Input",
      message: "Please enter the name of the daprtment you would like to add.",
      name: "departmentname",
    })
    .then((response) => {
      db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        response.departmentname,
        (error, res) => {
          if (error) throw error;
          console.log(response.departmentname + ` has successfully been created!`);
          viewDepartments();
        }
      );
    });
}

//User can add a role
function addRole() {
  console.log("Adding a role.");
  inquirer
    .prompt([
      {
        type: "Input",
        message: "Please enter the title of the role you would like to add.",
        name: "roletitle",
      },
      {
        type: "Input",
        message: "Please enter the salary of the role you would like to add.",
        name: "rolesalary",
      },
      {
        type: "Input",
        message: "Please enter the id of the department of which this role belongs.",
        name: "roledepartment",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO roles SET ?",
        {
          title: response.roletitle,
          salary: response.rolesalary,
          department_id: response.roledepartment,
        },
        function (error) {
          if (error) throw error;
          console.log("Role sucessfully created!");
          viewRoles();
        }
      );
    });
}

//User can add an employee
function addEmployee() {
  console.log("Adding an employee.");
  inquirer
    .prompt([
      {
        type: "Input",
        message:
          "Please enter the first name of the employee you would like to add?",
        name: "firstname",
      },
      {
        type: "Input",
        message: "Please enter the last name of the employee you would like to add?",
        name: "lastname",
      },
      {
        type: "Input",
        message: "Please enter the id of this employee's role?",
        name: "employeerole",
      },
      {
        type: "Input",
        message: "Please enter the id of this employee's manager?",
        name: "employeemanager",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: response.firstname,
          last_name: response.lastname,
          role_id: response.employeerole,
          manager_id: response.employeemanager,
        },
        function (error) {
          if (error) throw error;
          console.log("Employee created sucessfully!");
          viewEmployees();
        }
      );
    });
}