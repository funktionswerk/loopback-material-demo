var webpack = require('webpack');
var _ = require('lodash');
var baseConfig = require('./webpack/webpack.config.production.base');
var rootDir = process.cwd();

var config = _.clone(baseConfig);
config.entry = rootDir + '/app/main/bootstrap.ts';
config.output = {
  path: "public/js/",
  filename: "app.bundle.js"
};
module.exports = config;