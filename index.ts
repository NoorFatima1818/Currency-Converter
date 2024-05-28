#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";



const currency:any = {
    USD: 1,
    EUR: 0.94,
    CNY: 7.24,
    JPY: 153.28,
    GBP: 0.80,
    CAD: 1.38,
    INR: 83.61,
    PKR: 277.30
};

async function convertCurrency() {
   console.log(chalk.bold.blue("\n=== Currency Converter ===\n"));

   try {
let user_answer = await inquirer.prompt([
     {
        name:"from",
        message:chalk.cyan("Enter currency you want to convert from?"),
        type: "list",
        choices:["USD", "EUR", "CNY", "JPY", "GBP", "CAD", "INR", "PKR"]

     },
     {
        name:"to",
        message:chalk.cyan("Enter currency you want to convert to?"),
        type: "list",
        choices:["USD", "EUR", "CNY", "JPY", "GBP", "CAD", "INR", "PKR"]

     },
     {
        name: "amount",
        message: chalk.cyan("Enter your amount:"),
        type: "number",
        validate: (value) => {
         if (isNaN(value) || value <= 0) {
             return "Please enter a valid amount greater than zero.";
         }
         return true;
     }
     }
])

let fromAmount = currency [user_answer.from] ;
let toAmount = currency [user_answer.to] ;
let amount = user_answer.amount ;

let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(chalk.green(`Your converted amount is ${convertedAmount.toFixed(2)}.`)); }
catch (error) {
   console.error(chalk.red("An error occurred during the currency conversion."));
   console.error(error);
}
}

convertCurrency();
