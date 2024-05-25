const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Body parser middleware, does not make the url change depending on what is entered
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files 
app.use(express.static('public'));

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to handle POST request for adding numbers
app.post('/add', (req, res) => {
  const numbers = req.body.numbers.split(',').map(Number); // Makes the array
  const sum = numbers.reduce((acc, num) => acc + num, 0); //gets the sum of all numbers
	// acc starts at 0, then num adds each number throughout the array, making the total acc
  res.send(`The sum of the numbers ${numbers.join(', ')} is: ${sum}`); //result
});

// Start the server
app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
