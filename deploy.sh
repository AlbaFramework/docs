#!/usr/bin/env sh

set -e

rm -rf .vitepress/dist
npm run build
cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:alba-framework/alba-framework.github.io.git main

cd -