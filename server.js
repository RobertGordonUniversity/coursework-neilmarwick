const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = 3000;

// Define a route to handle GET requests
/*
app.get('/', (req, res) => {
  res.send('Hello, world!');
});*/ 


// Serve static files from the 'public' directory
//app.use(express.static('frontend'));

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
