# Static Deployment Build Script

# Build the application
npm run build

# Copy all public assets to build output
echo "Copying public assets..."
if cp -r public/* dist/public/; then
    echo "✓ Public assets copied successfully"
else
    echo "✗ Failed to copy public assets"
    exit 1
fi

# Verify critical files exist
echo "Verifying critical assets..."
critical_files=(
    "dist/public/assets/carri1.jpg"
    "dist/public/assets/laceras-logo.png"
    "dist/public/assets/carrier-2.jpg"
    "dist/public/assets/carrier-3.jpg"
    "dist/public/assets/carrier-4.jpg"
    "dist/public/assets/carrier-5.jpg"
    "dist/public/assets/carrier-6.jpg"
)

for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ $file exists"
    else
        echo "✗ Missing critical file: $file"
        exit 1
    fi
done

echo "✓ All critical assets verified"
echo "Build complete! Static files ready for deployment."
