// index.js

const express = require('express');
const app = express();
const artistRoute = require('./route/artistRoute');
const randomArtistMiddleware = require('./artist');
const randomGenreMiddleware = require('./genre');

//landing page
app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the landing page!</h1><p> Use /artist/genrename to find an artist with the genre you want. Use /artist-name to get a random artist, use /genre-name to get a random genre, and use /artist-and-genre to get a random artist and genre</p>');
});
// Include artists route
app.use('/artist', artistRoute);




// Routes for /artist-name, /genre-name, and /artist-and-genre
app.get('/artist-name', randomArtistMiddleware, (req, res) => {
  const { randomArtist } = res.locals;
  res.status(200).send(`Random Artist: ${randomArtist}`);
});

app.get('/genre-name', randomGenreMiddleware, (req, res) => {
  const { randomGenre } = res.locals;
  res.status(200).send(`Random Genre: ${randomGenre}`);
});

app.get('/artist-and-genre', randomGenreMiddleware, randomArtistMiddleware, (req, res) => {
  const { randomArtist, randomGenre } = res.locals;
  res.status(200).send(`Random Artist and Genre<br> ${randomArtist}<br> ${randomGenre}`);
});

// Starting the server
app.listen(8080, () => {
  console.log(`Server running at http://localhost:8080/`);
});
