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
    //variable to pull table data of products
    var productData = "SELECT * FROM products";

    //query data from database
    connection.query(productData, function (err, result) {
        if (err) throw err;
        console.log("Below is a list of our current inventory.")
        console.table(result);
        //run start function after inventory is shown
        // start();
 
        start();
    });
});

function start() {
    inquirer.prompt([{
        name: "id",
        type: "list",
        message: "What is the ID number for the item you would like to purchase?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
        {
         name: "quantity",
         type: "number",
         message: "How many would you like to purchase?",
        }
    ]).then(function(answer) {
        console.log(answer);
        connection.end();
    })
}