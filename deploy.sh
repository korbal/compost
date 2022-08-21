#!/usr/bin/env sh

# abort on errors
set -e

# swap dev main.js with deploy main js for deploy and set back to dev so google analytics won't measure local time

cd src

# Creating backups for config files
cp main.js main_backup.js
cp main_deploy.js main_deploy_backup.js

# Setting Deploy config live
mv main_deploy.js main.js

################## 
# DEPLOYING      #
##################

cd ..

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
################################################################
###############################################################
# enable this once refactoring done and point the domain to this repo
echo 'canicompostit.com' > CNAME

git init
git add -A
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>

#############################################################
#############################################################
#############################################################
# Rewrite the following lines to match your GitHub repository
git push -f git@github.com:korbal/compost.git main:gh-pages

# pushing to main at the same time to keep the deployment and repo in sync
#git push origin main

##################
# DEPLOY DONE    #
##################

# Navigating back to src to set dev config back
cd ..
cd src

# Setting Development config live after deploy
mv main_backup.js main.js

# Recreating original state for main_deploy file backup.
mv main_deploy_backup.js main_deploy.js

echo 'deploy succesful'
cd -
$SHELL