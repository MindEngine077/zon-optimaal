#!/bin/bash

# Start the application in production mode

echo "Starting Zon Optimaal in production mode..."

# Check if the build exists
if [ ! -d ".output" ]; then
  echo "Production build not found. Building the application first..."
  npm run build
  
  # Check if build was successful
  if [ $? -ne 0 ]; then
    echo "Build failed. Please check the error messages above."
    exit 1
  fi
fi

# Start the server
echo "Starting the server..."
node .output/server/index.mjs
