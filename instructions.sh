#This script checks if Express.js, body-parser, uuid, and pg are installed in the node_modules directory. 
#If not, it installs them using npm install. Then, it starts the server by running node server.js. 

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

# Install dependencies if not already installed
if [ ! -d "node_modules/express" ]
then
    echo "Express.js not found. Installing Express.js..."
    npm install express
fi

if [ ! -d "node_modules/body-parser" ]
then
    echo "body-parser not found. Installing body-parser..."
    npm install body-parser
fi

if [ ! -d "node_modules/uuid" ]
then
    echo "uuid not found. Installing uuid..."
    npm install uuid
fi

if [ ! -d "node_modules/pg" ]
then
    echo "pg not found. Installing pg..."
    npm install pg
fi

# Start the server
echo "Starting the server..."
node server.js
