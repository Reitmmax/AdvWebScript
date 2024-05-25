// JavaScript Document
const { writeFileSync } = require('fs');
//makes a file with 10000 lines of text
for (let i = 0; i < 10000; i++) {
    writeFileSync('./big.txt', `Hello world ${i}\n`, {flag: 'a'});
};