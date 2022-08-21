# Navigating back to src to set dev config back
cd src

echo 'Im in src yay'


# Setting Development config live after deploy
mv main_backup.js main.js

# Recreating original state for main_deploy file backup.
mv main_deploy_backup.js main_deploy.js

$SHELL