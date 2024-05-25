"use strict";
const fs = require('fs');


const name = process.argv[2];
const birthYear = parseFloat(process.argv[3]);

if( !name || isNaN(birthYear)) {
    console.log("Error! Please enter values!");
};
 const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear; 
 


fs.writeFileSync('result.txt', `My name is ${name} and I was born in ${birthYear}! I am currently ${age} years old.`);


const message = fs.readFileSync('./result.txt','utf8');

console.log(message);