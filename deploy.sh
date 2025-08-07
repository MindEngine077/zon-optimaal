#!/bin/bash

# Deployment script for Zon Optimaal

echo "Starting deployment process for Zon Optimaal..."

# 1. Pull latest changes from git
echo "Pulling latest changes from git..."
git pull

# 2. Install dependencies
echo "Installing dependencies..."
npm install

# 3. Build the application
echo "Building the application..."
npm run build

# 4. Generate static files (if needed)
echo "Generating static files..."
npm run generate

# 5. Preview the production build locally (optional)
if [ "$1" == "--preview" ]; then
  echo "Starting local preview..."
  npm run preview
  exit 0
fi

echo "Deployment completed successfully!"
echo "To start the application, run: node .output/server/index.mjs"

# Additional instructions for different hosting platforms
echo ""
echo "Deployment instructions for different platforms:"
echo "-----------------------------------------------"
echo "1. For Netlify/Vercel: Connect your repository and set build command to 'npm run build'"
echo "2. For standard Node.js hosting: Upload the .output directory and run with node .output/server/index.mjs"
echo "3. For static hosting: Upload the .output/public directory to your web server"
