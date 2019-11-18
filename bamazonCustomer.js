// bamazon assignment using nodejs and mysql
var mysql = require("mysql");
var inquirer = require("inquirer");
var id = 0;
var qty = 0;
var orderedProduct = "";
var inventory = 0;
var unitPrice = 0;

// create connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

function displayItems() {
    if (qty <= inventory) {
        connection.query("SELECT * FROM products", function (err, results) {
            if (err) throw err;
            console.log("\n--------------------------------------------------------------------------");
            console.log("item_id".padEnd(9) +
                "Product Name".padEnd(28) +
                "Price($)".padEnd(10) +
                "Stock".padEnd(6));
            console.log("--------------------------------------------------------------------------");
            for (var i = 0; i < results.length; i++) {
                //if (results[i].stock_quantity > 0) {
                console.log(results[i].item_id.toString().padEnd(9) +
                    results[i].product_name.toString().padEnd(28) +
                    results[i].price.toString().padEnd(10) +
                    results[i].stock_quantity.toString().padEnd(6));
                //}
            }
            console.log("--------------------------------------------------------------------------");
        });
    }
}
function orderInquire() {
    if (qty <= inventory) {
        connection.query("SELECT * FROM products", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "ordered_id",
                        type: "input",
                        message: "Please enter the id number of the product to purchase:",
                        validate: function (value) {
                            if ((isNaN(value) === false) && (value <= results.length) && (value > 0)) {
                                return true;
                            }
                            return false;
                        }
                    },
                    {
                        name: "ordered_qty",
                        type: "input",
                        message: "Please enter number of units to purchase:",
                        validate: function (value) {
                            if ((isNaN(value) === false) && (value > 0)) {
                                return true;
                            }
                            return false;
                        }
                    }
                ])
                .then(function (answer) {
                    id = answer.ordered_id;
                    qty = answer.ordered_qty;
                    unitPrice = results[id - 1].price;
                    inventory = results[id - 1].stock_quantity;
                    orderedProduct = results[id - 1].product_name;
                    checkAvailability();
                    updateDB();
                });
        });
    }
}
function checkAvailability() {
    if (qty <= inventory) {
        //if (qty > inventory) {
        //  console.log("Insufficient Quantity in inventory!!");
        // orderInquire();
        //} else {
        console.log("\nHere is your order detail.");
        console.log("--------------------------------------------------------------------------");
        console.log("item_id".padEnd(9) +
            "Product Name".padEnd(28) +
            "Price($)".padEnd(10) +
            "Qty".padEnd(5) +
            "Total($)".padEnd(6));
        console.log("--------------------------------------------------------------------------");
        console.log(id.toString().padEnd(9) +
            orderedProduct.toString().padEnd(28) +
            unitPrice.toString().padEnd(10) +
            qty.toString().padEnd(5) +
            (unitPrice * qty).toString().padEnd(6));
        console.log("--------------------------------------------------------------------------\n\n");
        //}
    }
}
function updateDB() {
    if (qty <= inventory) {
        connection.query("UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: inventory - qty
                },
                {
                    item_id: id
                }
            ],
            function (err, results) {
                if (err) throw err;
                //console.log("\n" + results.affectedRows + " product(s) updated in the database!\n");
                displayItems();
                orderInquire();
            }
        );
    } else {
        qty = 0;
        inventory = 0;
        console.log("\nInsufficient Quantity in inventory!!\n\n");
        start();
    }
}
function start() {
    displayItems();
    orderInquire();
}
connection.connect(function (err) {
    if (err) throw err;
    // display available items for sale when connection is made
    start();
});
