use employees;  

INSERT INTO department (name) 

VALUES  
('Sales'),
('Engineering'),
('Finance'),
('Legal'); 

INSERT INTO role  (title, salary, department_id) 
VALUES 
('Sales Lead', 800000, 1), 
('Salesperson', 55000, 1), 
('Lead Engineer', 200000, 2), 
('Software Engineer', 85000, 2),    
('Account Manager', 200000, 3), 
('Accountant', 55000, 3),
('Legal Team Lead', 200000, 4),     
('Lawyer', 100000, 4); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  
('Chanwoo', 'Quil', 1, NULL),
('Oliver', 'Hoang', 2, 1) , 
('Mike', 'Son', 3, NULL),     
('Abe', 'Tupak', 4, 3), 
('Jane', 'Song', 5, NULL), 
('Peter', 'Parker', 6, 5),  
('Rachel', 'Meow', 7, NULL),   
('Tom', 'Bradely', 8, 7);