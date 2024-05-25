// Importing the 'express' module
const express = require('express');

// Creating an Express application
const app = express();



const dater = require('./dater');

const logger = require('./logger');

const info = require('./routes/apiInfo');

app.use(dater);
app.use('/api/info',info);

// Handling GET request to the landing page with the logger and dater middleware
app.get('/', logger, dater, (req, res) => {
  res.status(200).send(`Welcome! Today's date is ${req.formattedToday}.`);
	res.end;
});



// Starting the server
app.listen(8080, () => {
  console.log(`Server running at http://localhost:8080/`);
});
