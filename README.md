ng build
aws s3 cp ./dist/firestone-website/ s3://www.firestoneapp.com --recursive --acl public-read

aws s3 cp ./src/ooc-login.html s3://www.firestoneapp.com --acl public-read
aws s3 cp ./src/twitch-login.html s3://www.firestoneapp.com --acl public-read
