//require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection information to sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Port number for connection
    port:3306,

    // Username for connection
    user: "root",

    // Password to connect
    password: "password",

    //database to connect to
    database: "bamazon_DB"
});

// connect to the server and database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    start();
});

function start() {
    inquirer.prompt ([{
        name: "options",
        type: "list",
        message: "Menu Options",
        choices: ["View Products", "Low Inventory", "Add to Inventory", "Add New Product"]
    }]).then(function(answer) {
        // console.log(answer.options)
        switch (answer.options) {
            case "View Products":
                viewProducts();
                break;
            case "Low Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addProduct();
                break;
        };

    });
};

//function to view products from prompt answer
function viewProducts() {
    //variable to pull table data of products
    productData = "SELECT * FROM products";
    //query data from database
    connection.query(productData, function (err, result) {
        if (err) throw err;
        console.log("Below is a list of our current inventory.")
        console.table(result);
    });

    connection.end();
};

//function to see low inventory from prompt answer
function lowInventory() {

};


//function to add inventory from prompt answer
function addInventory() {

};

//function to add product from prompt answer
function addProduct() {

};