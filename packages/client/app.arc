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
runtime nodejs16.x
# memory 1152
timeout 30
concurrency 5
profile default
region eu-west-2
