/*
// Add JavaScript functionality here, such as form submission handling and AJAX requests.
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('raffle-entry-form');
    const prizeDetails = document.getElementById('prize-details');
    const winnerSection = document.getElementById('winner-section');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the user's name and email from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Send the form data to the backend using fetch API
        fetch('/submit-entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        })
        .then(response => response.json())
        .then(data => {
            // Display the received prize details
            prizeDetails.innerHTML = `<p>Prize: ${data.prize}</p><p>Draw Date: ${data.drawDate}</p>`;
            // Show the winner section
            winnerSection.style.display = 'block';
            // Display the winner details
            document.getElementById('winner-details').innerText = `Winner: ${data.winner}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


// backend.js (using Node.js with Express)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Handle form submission
app.post('/submit-entry', (req, res) => {
    // Get user's name and email from request body
    const { name, email } = req.body;

    // Process the form submission (e.g., store user's entry in the database, select a winner)
    // For demonstration purposes, we'll just send back some sample data
    const data = {
        prize: 'Free Vacation',
        drawDate: '2024-03-01',
        winner: 'John Doe'
    };

    // Return response with prize details and winner information
    res.json(data);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/
