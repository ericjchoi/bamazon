DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket size S", "Clothing", 50.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket size M", "Clothing", 50.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket size L", "Clothing", 50.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LED TV 40 inch", "Electronics", 699.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LED TV 50 inch", "Electronics", 799.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LED TV 60 inch", "Electronics", 899.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goodnight Moon hardcover", "Books", 6.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goodnight Moon paperback", "Books", 5.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Gift Card $50", "Gift Cards", 50.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Gift Card $100", "Gift Cards", 100.00, 10);

SELECT * FROM products;
