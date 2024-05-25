
const { artist } = require('./data');

// Middleware function to select a random genre
const randomGenreMiddleware = (req, res, next) => {
  const genres = artist.map(a => a.genre);
  const randomIndex = Math.floor(Math.random() * genres.length);
  res.locals.randomGenre = genres[randomIndex];
  next();
};

module.exports = randomGenreMiddleware;
