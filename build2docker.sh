#!/bin/sh

docker stop assistant_vue

docker rm assistant_vue

docker image rm assistant_vue

npm run build

docker build -t assistant_vue .

docker run -p 3000:80 -d --name assistant_vue assistant_vue