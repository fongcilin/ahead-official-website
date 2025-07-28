#!/bin/bash

# Test script to verify iOS image fixes
echo "Testing iOS Image Fixes..."

# Build the project
echo "Building Next.js project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
    
    # Start the server in background
    echo "Starting server..."
    npm run start &
    SERVER_PID=$!
    
    # Wait for server to start
    sleep 5
    
    # Test image URLs
    echo "Testing image endpoints..."
    
    # Test if images are accessible
    IMAGES=(
        "/images/news/ahead_x_ash_2023.jpg"
        "/images/news/2024_isac_international_innovator.jpg" 
        "/images/news/yahoo.jpg"
        "/images/ahead_logo.png"
    )
    
    for img in "${IMAGES[@]}"; do
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$img")
        if [ "$HTTP_CODE" -eq 200 ]; then
            echo "✅ $img - OK"
        else
            echo "❌ $img - HTTP $HTTP_CODE"
        fi
    done
    
    # Kill the server
    kill $SERVER_PID
    echo "✅ Tests completed"
else
    echo "❌ Build failed"
    exit 1
fi
