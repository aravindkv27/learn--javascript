// Install the npm package npm install prompt-sync
const prompt = require("prompt-sync")();

var name = prompt("Enter the name: ");
console.log(`Hello, ${name}`);

// Example 2
// First name and Lastname
const firstName = prompt("Enter FirstName : ");
const lastName = prompt("Enter LastName : ");

// alert(`Hello, ${firstName} ${lastName}`);
console.log(`Hello, ${firstName} ${lastName}`)


// Calucalte vat price

const rawPrice = Number(prompt("Enter Raw Price: "));
const vatRate = 20.6 / 100;
const finalPrice = rawPrice * (1 + vatRate);

console.log("Final Price: "+ finalPrice);


