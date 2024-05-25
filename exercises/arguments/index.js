// JavaScript Document
"use strict";
const fs = require('fs');

// fs.writeFileSync('./result.txt', 'I wrote some text in a new document.');

const sideA = parseFloat(process.argv[2]);
const sideB = parseFloat(process.argv[3]);

if(isNaN(sideA) || isNaN(sideB)) {
    console.log("Error! Please pass valid numbers for all arguments.");
};

var sideC2 = Math.pow(sideA, 2) + Math.pow(sideB, 2);
var sideC = Math.sqrt(sideC2).toFixed(2);

 fs.writeFileSync('./result.txt', `We've made a triangle. Side A is ${sideA} inches long. Side B is ${sideB} inches long.` + '\n' + `This means that Side C needs to be about ${sideC} inches long.` + '\n \-M Reitmayer');

const message = fs.readFileSync('./result.txt','utf8');

console.log(message);