const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const table = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/users_db')


async function mainPrompts() {
 const { choice } = await prompt([
  {
   type: 'list',
   name: 'choice',
   message: 'What would you like to do?',
   choices: ['View All Employees', 'View All Departments', 'Add Departments', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Roles', 'Update Employee Manager', 'View All Roles'],
  },
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
 db.query('SELECT * FROM roles', (err, roles) => {
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


//ADD Functions for Employees 

function addEmployees() {
 inquirer.prompt([
  {
   type: 'input',
   name: 'first name',
   message: 'Enter Emplyoees First Name'
  },
  {
   type: 'input',
   name: 'Last Name',
   message: 'Enter Emplyoees Last Name'
  },
  {
   type: 'input',
   name: 'role id',
   message: 'Enter Emplyoees Role ID'
  },
  {
   type: 'input',
   name: 'Manager id',
   message: 'Enter Manager ID'
  }
 ])
 .then(newEmployee {
   db.query('INSERT INTO employees SET ?', newEmployee, err => {
    if (err) { console.log(err) }
    console.log(newEmployee)
   })
  })
}


//ADD Functions for Role

function addRole(newRole) {
 db.query('INSERT INTO roles SET ?', newRole, err => {
  if (err) { console.log(err) }
  console.log(newRole)
 })
}

//ADD Functions for Department

function addDepartment() {
 inquirer.prompt([
  {
   type: 'input',
   name: 'name',
   message: 'Please create a name a New Department.'
  }
 ])

  .then(newDepartment => {

   db.query('INSERT INTO departments SET ?', newDepartment, err => {
    if (err) { console.log(err) }
    console.log('New department has been added!')
    mainPrompts()
   })
  })
}

//Update Roles for Employees

function updateRole(newRole) {
 db.query('UPDATE employees SET ? WHERE ? ', newRole, err => {
  if (err) { console.log(err) }
  console.log(newRole)
 })
}





//   {
//    type: 'input',
//    name: 'lastname',
//    message: 'Type your employee last name',
//   },
//   {
//    type: 'list',
//    name: 'role',
//    message: 'Pick a role for your employee',
//    choices: ['Sales','Sales Manager', 'Accountant', 'Account Manager' 'Engineer', 'Engineer Manager', 'Legal Team Lead', 'Legal Team Member'],
//   },
//   {
//    type: 'list'
//    name: 'role'
//   }
//   ])
//  }
// }) 