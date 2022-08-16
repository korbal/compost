#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
################################################################
###############################################################
# enable this once refactoring done and point the domain to this repo
# echo 'canicompostit.com' > CNAME

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

cd -