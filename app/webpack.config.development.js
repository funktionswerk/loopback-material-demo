var webpack = require('webpack');
var _ = require('lodash');
var baseConfig = require('./webpack/webpack.config.development.base');
var rootDir = process.cwd();

var config = _.clone(baseConfig);
config.entry = rootDir + '/app/src/main.ts';
config.output = {
  path: "client/js/",
  filename: "app.bundle.js"
};
module.exports = config;