#!/bin/bash

# Project health check script for Zon Optimaal

echo "Running health check for Zon Optimaal project..."
echo "================================================"

# Check for Node.js and npm
echo -n "Checking Node.js... "
if command -v node &> /dev/null; then
  NODE_VERSION=$(node -v)
  echo "✅ Installed (version $NODE_VERSION)"
else
  echo "❌ Not installed"
  echo "Please install Node.js v18 or higher"
  exit 1
fi

echo -n "Checking npm... "
if command -v npm &> /dev/null; then
  NPM_VERSION=$(npm -v)
  echo "✅ Installed (version $NPM_VERSION)"
else
  echo "❌ Not installed"
  echo "Please install npm"
  exit 1
fi

# Check for required files
echo -n "Checking for package.json... "
if [ -f "package.json" ]; then
  echo "✅ Found"
else
  echo "❌ Not found"
  echo "package.json is missing. Are you in the correct directory?"
  exit 1
fi

echo -n "Checking for nuxt.config.ts... "
if [ -f "nuxt.config.ts" ]; then
  echo "✅ Found"
else
  echo "❌ Not found"
  echo "nuxt.config.ts is missing. Please make sure you have the core project files."
  exit 1
fi

# Check for .env file
echo -n "Checking for .env file... "
if [ -f ".env" ]; then
  echo "✅ Found"
else
  echo "⚠️ Not found"
  echo "Consider creating a .env file from .env.example"
fi

# Check dependencies
echo -n "Checking installed dependencies... "
if [ -d "node_modules" ]; then
  echo "✅ Found"
else
  echo "⚠️ Not installed"
  echo "Consider running 'npm install' to install dependencies"
fi

# Check for Supabase credentials
echo -n "Checking for Supabase credentials... "
if [ -f ".env" ] && grep -q "SUPABASE_URL" ".env" && grep -q "SUPABASE_KEY" ".env"; then
  echo "✅ Found"
else
  echo "⚠️ Not configured"
  echo "Supabase credentials not found in .env file. Set up Supabase before running the app."
fi

echo ""
echo "Health check completed!"
echo "For any issues, refer to the documentation in the docs/ directory."
