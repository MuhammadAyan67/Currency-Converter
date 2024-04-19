#! /usr/bin/env node

import inquirer from "inquirer";

let exchangeRate :any = {
    "USD" : 1,  //Base currency
    "EUR" : 0.9,  //Euro currency
    "JYP" : 113,  //Japanese currency
    "CAD" : 1.3,  // Canadian Doller
    "AUD" : 1.65, // Australian Doller
    "PKR" : 277, //Pakistani rupees
}
let userAnswer = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : "Select the currrency to convert from : ",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name : "to_currency",
        type : "list",
        message : "Select the currency to convert into : ",
        choices :["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name : "amount",
        type : "number",
        message : "Enter the amount to convert : "
    }
])
let fromAmount = exchangeRate[userAnswer.from_currency]
let toAmount = exchangeRate[userAnswer.to_currency]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertAmount = baseAmount * toAmount
console.log(`Converted Amount = ${convertAmount.toFixed(2)}`)