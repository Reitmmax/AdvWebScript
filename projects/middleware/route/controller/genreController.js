
const { artist } = require('../../data');

// Callback function to get all artists
const getAllArtists = (req, res) => {
  res.json(artist);
};

// Callback function to get artists by genre
const getArtistsByGenre = (req, res) => {
  const { genre } = req.params;
  const filteredArtists = genre ? artist.filter(a => a.genre === genre) : artist;
  res.json(filteredArtists);
};

module.exports = { getAllArtists, getArtistsByGenre };
