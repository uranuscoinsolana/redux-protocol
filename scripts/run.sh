#!/bin/bash

# Configuration
REMOTE_HOST="root@178.156.153.83"
APP_DIR="/app"

# Function to handle errors
handle_error() {
    echo "Error: $1"
    exit 1
}

# Clean local dependencies
echo "Cleaning local dependencies..."
rm -rf node_modules package-lock.json pnpm-lock.yaml yarn.lock
npm cache clean --force
pnpm store prune
yarn cache clean

# Remote deployment steps
echo "Starting remote deployment..."

# SSH command wrapper
remote_exec() {
    ssh $REMOTE_HOST "cd $APP_DIR && $1" || handle_error "Failed to execute: $1"
}

# Stop existing processes
echo "Stopping PM2 processes..."
remote_exec "pm2 stop all"

# Install dependencies and build
echo "Installing dependencies..."
remote_exec "pnpm install" 

echo "Building application..."
remote_exec "pnpm build"

# Start application
echo "Starting application..."
#remote_exec "pm2 startOrRestart ecosystem.config.js --env production"
remote_exec "pm2 start  "pnpm --filter \"@ai16z/agent\" start:server --isRoot"'"

echo "Deployment completed successfully!"