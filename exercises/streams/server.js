// JavaScript Document

const http = require('http');
const fs = require('fs');


http.createServer((req,res) => {
//loads chunks of data at a time
    const fileSteam = fs.createReadStream('./big.txt', 'utf-8');
    fileSteam.on('open', () => {
        fileSteam.pipe(res);
    });

	
    fileSteam.on('error', (err) => {
        res.end(`${err}`);
    });
}).listen(8080);