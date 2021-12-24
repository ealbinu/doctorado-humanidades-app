#!/bin/sh
quasar build spa && git add . && git commit -m "Update & build" && git push origin main && git subtree push --prefix dist/spa origin gh-pages

#https://gist.github.com/cobyism/4730490