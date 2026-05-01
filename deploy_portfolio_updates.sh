#!/bin/bash
# ================================================
# DEPLOYMENT SCRIPT - Portfolio Email Setup
# ================================================
# This script copies the updated files to your portfolio directory
# Run this from your portfolio repository root
#
# Usage: bash deploy_portfolio_updates.sh
# ================================================

echo "========================================="
echo " Portfolio Email Setup - Deployment Script"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Source directory (where updated files are)
SOURCE_DIR="/tmp/portfolio"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory not found at $SOURCE_DIR${NC}"
    echo "Please ensure files are in /tmp/portfolio/"
    exit 1
fi

# Target directory (current directory by default)
TARGET_DIR=$(pwd)

echo -e "${YELLOW}Source:${NC} $SOURCE_DIR"
echo -e "${YELLOW}Target:${NC} $TARGET_DIR"
echo ""

# Files to copy
FILES=(
    "contact.html"
    "main.js"
    "emailjs-config.js"
    "README.md"
    "EMAIL_SETUP_GUIDE.md"
    "SETUP_EMAIL.md"
    "QUICK_START.md"
    "IMPLEMENTATION_SUMMARY.md"
    "COMPLETE.md"
)

echo "Files to be updated:"
echo "-------------------"
for file in "${FILES[@]}"; do
    if [ -f "$SOURCE_DIR/$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file (not found)"
    fi
done
echo ""

# Ask for confirmation
echo -e "${YELLOW}Warning:${NC} This will overwrite existing files!"
read -p "Do you want to continue? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "Copying files..."
echo "-------------------"

# Copy files
for file in "${FILES[@]}"; do
    if [ -f "$SOURCE_DIR/$file" ]; then
        cp "$SOURCE_DIR/$file" "$TARGET_DIR/$file"
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓${NC} Copied $file"
        else
            echo -e "${RED}✗${NC} Failed to copy $file"
        fi
    fi
done

echo ""
echo "========================================="
echo -e "${GREEN} Deployment Complete!${NC}"
echo "========================================="
echo ""
echo "Updated files:"
echo "  • contact.html - Main form page (EmailJS integrated)"
echo "  • main.js - Core JavaScript (cleaned up)"
echo "  • emailjs-config.js - Configuration file (new)"
echo "  • README.md - Project documentation (updated)"
echo "  • EMAIL_SETUP_GUIDE.md - Setup instructions (new)"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "  1. Review EMAIL_SETUP_GUIDE.md"
echo "  2. Get EmailJS credentials from https://dashboard.emailjs.com/"
echo "  3. Update contact.html with your IDs"
echo "  4. Test the form locally"
echo "  5. Deploy to GitHub Pages"
echo ""
echo -e "${GREEN}Good luck with your portfolio! 🚀${NC}"
echo "========================================="

# Optional: Show git status
echo ""
echo "Git Status:"
echo "-------------------"
cd "$TARGET_DIR" 2>/dev/null && git status --short
echo ""

exit 0