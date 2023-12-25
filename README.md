ng build && aws s3 cp ./dist/firestone-website/ s3://www.firestoneapp.com --recursive --acl public-read

aws s3 cp ./src/oog-login.html s3://www.firestoneapp.com --acl public-read
aws s3 cp ./src/twitch-login.html s3://www.firestoneapp.com --acl public-read
aws s3 cp ./src/discord_oauth.html s3://www.firestoneapp.com --acl public-read
