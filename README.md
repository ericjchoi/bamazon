# bamazon
bamazonCustomer.js is an Amazon-like storefront Nodejs app using MySQL. 

## Files
- bamazonCustomer.js - main javascript file

## npm package used
- inquirer
- mysql

## Execting app in command line
- node bamazonCustomer.js

## Challenge #1
The app will first shows inventory and take an order. Upon availabiliy, order detail including total item id, product name, quantity, and total price is displayed. Then the updated database is displayed. Now App will take a new order from  customer.

## Screenshots when the app running in command line
![figure1](./assets/images/challenge1_screenshot1.jpg)
Figure 1. Running bamazonCustomer.js in commandline for challenge #1. Displays inventory, take an order, display order detail, display updated inventory and takes a new order.

## Progres so far
- MySQL Database called "bamazon" created.
- A Table called "products" created with columns of 
  - item_id (unique id for each product)
  - product_name (Name of product)
  - department_name
  - price (cost to customer)
  - stock_quantity (how much of the product is available in stores)
- 10 different products populated in the database.

## Remark
Currently working on database updating part of challenge #1. Will be updated other parts of the assignment.