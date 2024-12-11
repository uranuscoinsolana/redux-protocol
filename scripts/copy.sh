#!/bin/bash

# Navigate to project root
cd "$(dirname "$0")"/..

# Copy files to server
echo -e "\033[1mCopying files to server...\033[0m"
if ! rsync -av --force -e "ssh -i ~/.ssh/id_ed25519" \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    --exclude '.turbo' \
    ./ root@178.156.153.83:/app/; then
    echo -e "\033[1;31mFailed to copy files to server\033[0m"
    exit 1
fi

echo -e "\033[1;32mFiles successfully copied to server!\033[0m"