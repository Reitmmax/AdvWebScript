// Import the express module
const express = require('express');

// Set up express app
const app = express();

// Import the body-parser module
const bodyParser = require('body-parser');

// Import lodash
const _ = require('lodash');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//decides how info in encoded into url, when set to false we can treat the information as any type
app.use(bodyParser.urlencoded({ extended: false }));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route for serving the style.css file
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});

// Route for serving the validator.js file
app.get('/validator.js', (req, res) => {
  res.sendFile(__dirname + '/validator.js');
});


// Route for handling the /bought POST request
app.post('/bought', (req, res) => {
  // Retrieve the values from the request body
  let opt01 = req.body.opt01;
  let opt02 = req.body.opt02;
  let opt03 = req.body.opt03;

  // Set the prices for each item
  let price01 = _.multiply(opt01, 12.50);
  let price02 = _.multiply(opt02, 5.75);
  let price03 = _.multiply(opt03, 8);

  // Set the tax rate
  let taxes = 0.073;

  // Calculate the total price without taxes
  let bought = price01 + price02 + price03;

  // Calculate the partial tax amount
  let partial = _.multiply(bought, taxes);

  // Calculate the total price including taxes
  let Total = (bought + partial).toFixed(2);

  // Send the response with the total price
  res.status(200).send(`
    <head>
      <link href="style.css" rel="stylesheet">
      <title>JS Store Total</title>
    </head>
    <body>
      <div id="total">
        <p><b>Total:</b> $${Total}</p>
      </div>
    </body>
  `);
});

// Start the server

app.listen(8080, () => {
  console.log(`App running at http://localhost:8080/`);
});