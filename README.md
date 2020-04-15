# Bamazon

## Introduction

Bamazon is an Amazon-like store front using node.js and mysql CLI app. 

## Bamazon Setup

1. Clone the repository
2. Run npm install. This will install the following packages...

    * Inquirer

    * Mysql
3. Run command depending on mode you would like to be on. 

    * node bamazonCustomer.js

    * node bamazonManager.js

### What Each command does

1. `BamazonCustomer.js`

    * Prints a table of the products available in the store

    * Asks the customer which product they would like to purchase by ID number provided on the table of products.

    * Asks the customer for the quantity they would like to purchase.

        * If there is not enough stock quantity of the product, it will respond there is not enough stock and to start over.
        * If there is enough stock to fullfull the purchase, it will respond with product name and purchase amount. 
        * If purchase goes through, it will update the database to reflect the new stock quantatity for the product.

-----------------------