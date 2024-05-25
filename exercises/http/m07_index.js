// JavaScript Document
'use strict'

const http = require('http');
const {readFileSync} = require('fs');
//Get Files
const aboutpg = readFileSync('./indexbanner/about.html');
const indexpg = readFileSync('./indexbanner/index.html');
const mainsty = readFileSync('./indexbanner/main.css');
const banimg = readFileSync('./indexbanner/banner_forest.png');

const server = http.createServer((req,res)=>{

	const url = req.url;
	   if(url === '/'){ //index
        res.writeHead(200,{'content-type':'text/html'});
        //res.write('<h1>This is a Title</h1><p>This is a paragraph.</p>');
		res.write(indexpg);
        res.end();
    } else if (url === '/main.css') {
		 res.writeHead(200,{'content-type':'text/css'});
       
		res.write(mainsty);
        res.end();
	} else if (url === '/banner_forest.png') {
		 res.writeHead(200,{'content-type':'image/x-png'});
       
		res.write(banimg);
        res.end();
	} else if(url === '/about'){//about
        res.writeHead(200,{'content-type':'text/html'});
       // res.write('<h1>About Us</h1><p>This is some about us. So many facts. Blah blah.</p>');
        res.write(aboutpg);
		res.end();
    } else {// error
		res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Oops! Page not found!</h1>');
        res.end();
	}
	
	
	
	
	
	
	//Code below creates 1 webpage with the said data
	//    res.writeHead(200,{'content-type':'text/html'});
//	res.write('<h1>This is a Title</h1><p>This is a paragraph.</p>')
//	//res.write('This is the text after the head')
//	//res.write('This is text.');
//    res.end();
});

server.listen(8080);
console.log('Server reached');
