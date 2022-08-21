#!/usr/bin/env sh

echo 'current path is '$PWD

cd src

# Setting Development config live after deploy
mv main_backup.js main.js

# Recreating original state for main_deploy file backup.
mv main_deploy_backup.js main_deploy.js
$SHELL