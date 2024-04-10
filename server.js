// backend.js

const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4
const { Pool } = require('pg'); // Import pg module for PostgreSQL
const path = require('path'); // Import path module
const app = express();
const port = 8080;

// Create a PostgreSQL pool. for unpublished detail which ties guest accounts to their entry in raffle
const pool = new Pool({
  user: 'neilmarwick',
  host: 'localhost',
  database: 'your_database_name',
  password: 'Neil1968',
  port: 5432,
});

// Middleware
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'frontend')));

// Handle form submission
app.post('/submit-entry', async (req, res) => {
    // Generate a UUID
    const uuid = uuidv4();
    
    // Extract guest user's name and email from request body
    const { name, email } = req.body;

    try {
        // Store UUID, name, and email in the database
        await pool.query('INSERT INTO entries (uuid, name, email) VALUES ($1, $2, $3)', [uuid, name, email]);
        
        // Return response with success message and UUID
        res.json({ success: true, uuid });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'An error occurred while processing the entry' });
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});