### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE devourers
(
	id int NOT NULL AUTO_INCREMENT,
	devourer_name varchar(255) NOT NULL,
	burgerId int NOT NULL,
	createdAt DateTime NOT NULL,
	updatedAt DateTime NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (burgerId) REFERENCES burgers(id)
);
