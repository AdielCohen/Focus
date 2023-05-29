# Focus

![Alt Text](preview1.png)

![Alt Text](preview2.png)

1. MYSQL insert code:

CREATE TABLE `focus`.`colors` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `focus`.`departments` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `focus`.`employees` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `age` INT NOT NULL,
    `is_senior` BOOLEAN NULL,
    `favorite_color` VARCHAR(45) NOT NULL,
    `department` INT NOT NULL,
      PRIMARY KEY (`id`)
);


USE focus;
INSERT INTO departments (id, name)
VALUES ('1', 'Development');
INSERT INTO departments (id, name)
VALUES ('2', 'Finance');

USE focus;
INSERT INTO colors (id, name)
VALUES ('1', 'Black');
INSERT INTO colors (id, name)
VALUES ('2', 'White');
INSERT INTO colors (id, name)
VALUES ('3', 'Blue');
INSERT INTO colors (id, name)
VALUES ('4', 'Green');
INSERT INTO colors (id, name)
VALUES ('5', 'Red');
INSERT INTO colors (id, name)
VALUES ('6', 'Pink');
INSERT INTO colors (id, name)
VALUES ('7', 'Yellow');

USE focus;
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('1', 'Moti', '25', '0', 'white', 1);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('2', 'Eden', '21', '0', 'white', 1);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('3', 'Liad', '23', '0', 'white', 1);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('4', 'Karni', '21', '0', 'white', 1);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('5', 'Matan', '21', '0', 'white', 2);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('6', 'Guy', '19', '0', 'white', 2);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('7', 'Tair', '19', '0', 'white', 2);
INSERT INTO employees (id, name, age, is_senior, favorite_color, department)
VALUES ('8', 'Lihi', '19', '0', 'white', 2);

2.
Open new terminal:
1) cd frontend
2) npm i
3) npm start

Open second terminal:
1) cd backend
2) python manage.py runserver localhost:4000

