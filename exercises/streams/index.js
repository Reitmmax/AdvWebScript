// JavaScript Document
const {createReadStream} = require('fs');
const stream = createReadStream('./big.txt');

stream.on('data',(result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(`ALERT! ALERT! ALERT! \n${err}`)
});