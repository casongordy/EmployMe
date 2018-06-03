DROP DATABASE IF EXISTS jobs_DB;

CREATE DATABASE jobs_DB;

USE jobs_DB;

CREATE TABLE jobs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  description VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  currentDate varchar(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO jobs (title, descrption, price, currentDate)
VALUES ("Moving Couch", "Need Done", 100, "06-13-2018");

INSERT INTO jobs (title, descrption, price, currentDate)
VALUES ("Cleaning Kitchen", "Very Dirty", 150, "06-22-2018");

INSERT INTO jobs (title, descrption, price, currentDate)
VALUES ("Grocery Shopping", "By tomorrow", 20, "06-23-2018");

