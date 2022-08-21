#!/usr/bin/env sh

cd src

cp fasz.js fasz_backup.js

echo 'fasz copied to fasz_backup'

cp fasz_deploy.js fasz_deploy_backup.js

echo 'fasz_deploy copied to fasz_deploy_backup'


# Deploy config is live
mv fasz_deploy.js fasz.js

echo 'fasz.js is deploy config'

########

# RUN DEPLOY HERE

########

echo 'deploying....'

# Development config is back
mv fasz_backup.js fasz.js

echo 'fasz.js is development config'

mv fasz_deploy_backup.js fasz_deploy.js

echo 'fasz_deploy_backup renamed back to fasz_deploy'

cd ..

$SHELL