// JavaScript Document
'use strict'
const express = require('express');
const app = express();

//shorthand for code above
//const app = require('express')();
const path = require('path');

//allows all files to be read and used
app.use(express.static('./indexbanner'));

app.listen(8080, () => {
    console.log('server listening at 8080');
});

app.get('/',(req, res)=>{
    //res.send('<h1>Welcome to home page</h1>');
	// res.status(200).send('<h1>Welcome to home page</h1>');
	res.status(200).sendFile(path.resolve(__dirname, './indexbanner/index.html'));
	
})
app.get('/about',(req, res)=>{
    //res.send('<h1>Welcome to home page</h1>');
	 //res.status(200).send('<h1>About Me!</h1>');
	res.status(200).sendFile(path.resolve(__dirname, './indexbanner/about.html'));
})

app.all('*',(req,res)=>{
    //res.status(404).send('<h1>Resource Not Found</h1><p>Sorry about that. Do you want to go <a href="/">Home</a>?');
	res.status(200).sendFile(path.resolve(__dirname, './indexbanner/404.html'));
})