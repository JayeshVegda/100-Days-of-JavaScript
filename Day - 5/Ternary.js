//Day 5

const prompt=require("prompt-sync")({sigint:true}); 
let age = prompt("Enter You Age : ");
age = Number.parseInt(age)

// condition ? exprIfTrue : exprIfFalse

console.log("You Can", (age>18 ? "Drink" : "Not Drink" ))
