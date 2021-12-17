const inquirer = require ('inquirer');
const { prompt } = require("inquirer");
const db = require ('./db');
const cTable = require ('console.table');



async function mainPrompts () {
 const {choice} = await prompt([
  {
   type: 'list',
   name: 'choice',
   message: 'What would you like to do?',
   choices: ['View all Employees', 'View All Employees by Department','View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Roles', 'Update Employee Manager', 'View All Roles'],
  },
 ]); 
} 




//   {
//    type: 'input',
//    name: 'firstname',
//    message: 'Type your employee first name',
//   },
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