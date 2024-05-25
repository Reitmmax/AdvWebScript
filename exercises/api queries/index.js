// JavaScript Document
"use strict"

const express = require('express');
const app = express();
const {items} = require('./data');

//server
app.get('/', (req,res)=>{
  res.send('<h1>Rock, Paper, Scissors Ring</h1><a href="/api/items">Available Items</a>')
});

//grabs data from data.js
app.get('/api/items', (req,res)=>{ 
//displays everything
	//res.json(items);
	
	//displays only data called
const newListing = items.map((item)=>{
        const {name, desc, strength, weakness} = item;
        return {name, desc, strength, weakness}
    })
    res.json(newListing);

});

//app.get('/api/items/1', (req,res)=>{ 
//const singleItem = items.find((item)=>item.id === 1)
//     res.json(singleItem)
//});

//when you put an id at the end of the url, it shows only whats in that ID's array
app.get('/api/items/:itemID',(req,res)=>{
	
	console.log(req.params);
    const {itemID} = req.params;
    const singleItem = items.find((item)=>item.id === Number(itemID));
    res.json(singleItem);
});


//use query for searching certain phrases ex. /query?search="text"
app.get('/query',(req,res)=>{ 


const {search,limit} = req.query; //if user doesn't provide search, give everything
    let sorted = [...items];

	if(search){ // searches for whatever word is used to search
        sorted = sorted.filter((item)=>{
            return item.desc.match(search);
        })
    }
	//limits how much is shown if limit is in url ex. /query?search="text"&limit=#
	if(limit){
        sorted = sorted.slice(0,Number(limit))
    }
	
	 //if nothing matches search query
    if(sorted.length < 1) {
        res.status(200).json("No items matching your query were found.")
    }

    res.status(200).json(sorted); 
});



app.listen(8080,()=>{
    console.log('Server is running...');
});