

const express = require('express');
const router = express.Router();
const { getAllArtists, getArtistsByGenre } = require('./controller/genreController');
const randomArtistMiddleware = require('../artist');
const randomGenreMiddleware = require('../genre');

// Route to get all artists
router.get('/', getAllArtists);

// Route to get artists by genre
router.get('/:genre?', randomGenreMiddleware, getArtistsByGenre);

module.exports = router;
