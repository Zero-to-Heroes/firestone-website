ng build && aws s3 cp ./dist/firestone-website/ s3://www.firestoneapp.com --recursive --acl public-read

aws s3 cp ./src/oog-login.html s3://www.firestoneapp.com --acl public-read
aws s3 cp ./src/twitch-login.html s3://www.firestoneapp.com --acl public-read
aws s3 cp ./src/discord_oauth.html s3://www.firestoneapp.com --acl public-read
aws s3 cp ./src/guild-join.html s3://www.firestoneapp.com --acl public-read

https://www.firestoneapp.com/guild-join.html?communityId=a303e4de-2e5a-4484-8f07-4e12367b8627&joinCode=beta-testers
