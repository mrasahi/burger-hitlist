USE `ur91fx8xw0mkxgk3`;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(30) DEFAULT 'burger',
    devoured BOOL DEFAULT false NOT NULL
);