const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const table = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/employeeTrack_db')


function mainPrompts() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add Departments', 'Add Employee', 'Add Role', 'Update Employee Roles']
    }
  ])
    .then(({ choice }) => {

      switch (choice) {
        case 'View All Departments':
          seeDepartments()
          break;
        case 'View All Roles':
          seeRoles()
          break;
        case 'View All Employees':
          seeEmployees()
          break;
        case 'Add Departments':
          addDepartment()
          break;
        case 'Add Employee':
          addEmployees()
          break;
        case 'Add Role':
          addNewrole()
          break;
        case 'Update Employee Roles':
          updateRole()
          break;
      }



    })

}

mainPrompts()

//VIEW Functions for ALL employees
function seeEmployees() {
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
  })
}


//VIEW Functions for ALL roles 
function seeRoles() {
  db.query('SELECT * FROM role', (err, roles) => {
    if (err) { console.log(err) }
    console.table(roles)
  })
}


//VIEW Functions for ALL departments

function seeDepartments() {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
  })
}


//Functions for Add Employees 

function addEmployees() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter Emplyoees First Name'
    },
    {
      type: 'input',
      name: 'last_Name',
      message: 'Enter Emplyoees Last Name'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter Emplyoees Role ID'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter Manager ID'
    }
  ])
    .then(newEmployee => {
      console.log(newEmployee)
      db.query('INSERT INTO employees SET ?', newEmployee, err => {
        if (err) { console.log(err) }
        console.log('New Employee Added!')
        mainPrompts()
      })
    })
}


//Functions for Add Role
function addNewrole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please Enter a new title'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter new salary'
    },
    {
      type: 'input',
      name: 'departments_id',
      message: 'Enter Emplyoees Role ID'
    }
  ])
    .then(newRole => {
      console.log(newRole)
      db.query('INSERT INTO roles SET ?', newRole, err => {
        if (err) { console.log(err) }
        console.log('New Role Added!')
        mainPrompts()
      })
    })
}
//Functions for Add Department

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please type the New Department.'
    }
  ])

    .then(newDepartment => {
      console.log(newDepartment)
      db.query('INSERT INTO departments SET ?', newDepartment, err => {
        if (err) { console.log(err) }
        console.log('New department has been added!')
        mainPrompts()
      })
    })
}

//Update Roles for Employees

function updateRole() {
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
    inquirer.prompt([
      {
        type: 'input',
        message: "Enter the last name of the employee that want to update",
        name: 'last_name'
      },
      {
        type: 'input',
        message: "What is the new role for the updated employee",
        name: 'role_id'
      }
    ])
      .then(updateEmployee => {
        db.query('UPDATE employees SET ? WHERE ?', [{ role_id: updateEmployee.role_id }, { last_name: updateEmployee.last_name }], () => {
          if (err) { console.log(err) }
          console.log('Employee Role Updated!')
          mainPrompts()
        })
      })
  })
}