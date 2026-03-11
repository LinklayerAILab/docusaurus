#!/bin/bash
git pull
cd website
yarn install
yarn build
./servestartstop.sh restart
