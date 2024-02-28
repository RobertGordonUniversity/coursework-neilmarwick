#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js not found. Installing Node.js..."
    # Install Node.js and npm
    sudo apt update
    sudo apt install -y nodejs npm
fi

# Navigate to the directory containing the server script
#cd /path/to/your/project

# Install Express.js if not already installed
if [ ! -d "node_modules/express" ]
then
    echo "Express.js not found. Installing Express.js..."
    npm install express
fi

# Start the server
echo "Starting the server..."
node server.js
