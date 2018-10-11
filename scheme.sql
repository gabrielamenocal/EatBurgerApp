DROP DATABASE IF EXISTS burgerDB;
CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgerTable(
    id INTEGER AUTO_INCREMENT NOT NULL, 
    burger_name VARCHAR (30),
    devoured BOOLEAN,
    PRIMARY KEY (id)  
);