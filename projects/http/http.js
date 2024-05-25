// JavaScript Document
'use strict'

const http = require('http');
const {readFileSync} = require('fs');
//Get Files
const apppg = readFileSync('app.html');
const indexpg = readFileSync('httpindex.html');
const errorpg = readFileSync('404.html')
const mainsty = readFileSync('style.css');
const appjs = readFileSync('app.js')
const banimg = readFileSync('banner.jpg');

const server = http.createServer((req,res)=>{

	const url = req.url;
	   if(url === '/'){ //index
        res.writeHead(200,{'content-type':'text/html'});
       
		res.write(indexpg);
        res.end();
    } else if (url === '/style.css') {
		 res.writeHead(200,{'content-type':'text/css'});
       
		res.write(mainsty);
        res.end();
	} else if (url === '/banner.jpg') {
		 res.writeHead(200,{'content-type':'image/jpeg'})
		res.write(banimg);
        res.end();
	} else if (url === '/app.js'){
		 res.writeHead(200,{'content-type':'application/javascript'})
		res.write(appjs);
        res.end();
	} else if(url === '/app'){// web app
        res.writeHead(200,{'content-type':'text/html'});
        res.write(apppg);
		res.end();
    }  else {// error
		res.writeHead(200,{'content-type':'text/html'});
        res.write(errorpg);
        res.end();
	}
	
});

server.listen(8080);
console.log('Server reached');
