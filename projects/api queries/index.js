
// JavaScript Document
"use strict"

const express = require('express');
const app = express();
const {songs} = require('./data');

//server
app.get('/', (req,res)=>{
  res.send('<h1>The Soul of Music</h1><a href="/api/songs">Find artist and songs here!</a><p>To search for artists type /api/songs/:artist and replace :artist with the name</p><p>To search for albums type: /api/songs/album/:album and replace :album with the album name</p><p>To find an ablum, artist, or name of a song type /query?search=term where term is the name you are looking for</p>')
});

//grabs data from data.js
app.get('/api/songs', (req,res)=>{ 

	
	//displays only data called
const newListing = songs.map((song)=>{
        const {artist, track, album, length, year} = song;
        return {artist, track, album, length, year}
    })
    res.json(newListing);

});


// Search by artist
app.get('/api/songs/:artist', (req, res) => {
    console.log(req.params);
    const { artist } = req.params;
    const artistLowerCase = artist.toLowerCase();
    const songsByArtist = songs.filter((song) => song.artist.toLowerCase() === artistLowerCase);
    res.json(songsByArtist);
});

// Search by album
app.get('/api/songs/album/:album', (req, res) => {
    console.log(req.params);
    const { album } = req.params;
    const albumLowerCase = album.toLowerCase();
    const songsByAlbum = songs.filter((song) => song.album.toLowerCase() === albumLowerCase);
    res.json(songsByAlbum);
});



//search by album
app.get('/query', (req, res) => {
    const { search, limit } = req.query;
    let sorted = [...songs];

    if (search) {
        const searchLowerCase = search.toLowerCase();
        sorted = sorted.filter((song) => {
            return song.artist.toLowerCase().includes(searchLowerCase) ||
                   song.track.toLowerCase().includes(searchLowerCase) ||
                   song.album.toLowerCase().includes(searchLowerCase);
        });
    }

    if (limit) {
        sorted = sorted.slice(0, Number(limit));
    }

    if (sorted.length < 1) {
        res.status(200).json("No items matching your query were found.");
    }

    res.status(200).json(sorted);
});






 app.get("*", (req, res) => {
    res.status(404).send("This isn't the page you're looking for!");
  });



app.listen(8080,()=>{
    console.log('Server is running...');
});