const express = require('express');
const app = express();
const port = 3000;

// Initialize the counter
let counter = 0;

// Serve static HTML file
app.use(express.static('public'));

// Endpoint to get the current counter value
app.get('/get-counter', (req, res) => {
  res.json({ counter: counter });
});

// Endpoint to increment the counter
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter: counter });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
