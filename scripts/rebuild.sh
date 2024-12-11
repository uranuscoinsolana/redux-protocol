#!/bin/bash

# Function to print colored output
print_status() {
    echo -e "\e[1m$1\e[0m"
}

print_success() {
    echo -e "\e[1;32m$1\e[0m"
}

print_error() {
    echo -e "\e[1;31m$1\e[0m"
}

# Navigate to app directory
cd /app || { print_error "Failed to navigate to /app"; exit 1; }

# # Clean install
# print_status "Cleaning node_modules and lock files..."
# rm -rf node_modules pnpm-lock.yaml

# Fresh install
print_status "Installing dependencies..."
pnpm install --force || { print_error "Failed to install dependencies"; exit 1; }

# Build
print_status "Building project..."
pnpm build || { print_error "Failed to build project"; exit 1; }

# Restart server (without stopping first)
print_status "Restarting server..."
pm2 restart 0

print_success "Rebuild complete! 🎉"

# pm2 start  "pnpm --filter \"@ai16z/agent\" start:server --isRoot"