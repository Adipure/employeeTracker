use employeeTrack_db;  

INSERT INTO departments (name) 

VALUES  
('Sales'),
('Engineering'),
('Finance'),
('Legal'); 

use employeeTrack_db;  
INSERT INTO role (title, salary, departments_id) 
VALUES 
('Sales Lead', 800000, 1), 
('Salesperson', 55000, 1), 
('Lead Engineer', 200000, 2), 
('Software Engineer', 85000, 2),    
('Account Manager', 200000, 3), 
('Accountant', 55000, 3),
('Legal Team Lead', 200000, 4),     
('Lawyer', 100000, 4); 

use employeeTrack_db;  
INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES  
('chanwoo', 'Hwang', 1, NULL),
('Mike', 'Big', 2, 1) , 
('Kelvin', 'Tupak', 3, NULL),     
('Ian', 'Suarez', 4, 3), 
('Henry', 'Hangover', 5, NULL), 
('Sarah', 'Anderson', 6, 5),  
('Tom', 'Bradely', 7, NULL),   
('Peter', 'Parker', 8, 7);