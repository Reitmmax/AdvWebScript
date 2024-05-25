

const { artist } = require('./data');

// Middleware function to select a random artist
const randomArtistMiddleware = (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * artist.length);
  res.locals.randomArtist = artist[randomIndex].artist;
  next();
};

module.exports = randomArtistMiddleware;
