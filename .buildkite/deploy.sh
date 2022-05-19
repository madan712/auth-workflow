#!/usr/bin/bash

set -euo pipefail

echo 'Inside deploy.sh'
echo 'Installing..'
yarn install
echo 'Building...'
yarn build
echo 'Done'