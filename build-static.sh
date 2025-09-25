#!/bin/bash
echo "Building application..."
npm run build
echo "Copying public assets..."
cp -r public/* dist/public/
echo "Build complete! Static files ready for deployment."
