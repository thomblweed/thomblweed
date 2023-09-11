@app
thomblweed-client

@http
/*
  method any
  src server

@static
compression br
prune true

@plugins
plugin-remix
  src plugin-remix.js

@aws
profile default
region eu-west-2
