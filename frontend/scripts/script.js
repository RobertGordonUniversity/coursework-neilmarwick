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

        // Generate a UUID for the user
        const uuid = uuidv4();

        // Send the form data to the backend using fetch API
        fetch('/submit-entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uuid, name, email }) // Include UUID in the form data
        })
        .then(response => response.json())
        .then(data => {
            // Show the winner section
            winnerSection.style.display = 'block';
            // Display the winner's UUID
            document.getElementById('winner-details').innerText = `Winner UUID: ${data.uuid}`;
        })        
        .catch(error => {
            console.error('Error:', error);
        });
        
        // Log a message to the console to verify if the event is triggered
        console.log('Form submitted');
    });
});
