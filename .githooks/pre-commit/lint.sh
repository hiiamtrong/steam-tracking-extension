#!/bin/bash

echo "Fixing style... 🔧 🔨 🪚"
npm run css:lint-fix



echo "Running eslint... 👀"

npm run code:lint

echo "Running stylelint... 💅 💅 💅"

npm run css:lint

echo "Running typecheck... 🩺 🔬 🔭"
npm run code:typecheck
