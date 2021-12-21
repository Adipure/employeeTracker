CREATE DATABASE employeeTrack_db;

USE employeeTrack_db;

CREATE TABLE employees (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT Null,
role_id INT  NOT NULL,
manager_id INT
); 

USE employeeTrack_db;

CREATE TABLE departments(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR (30) NOT NULL
);

USE employeeTrack_db;

CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR (30) NOT NULL,
salary DECIMAL (10) NOT NULL,
departments_id INT NOT NULL,
FOREIGN KEY (departments_id) REFERENCES departments(id)
);
