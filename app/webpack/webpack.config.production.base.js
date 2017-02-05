var _ = require('lodash');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var rootDir = process.cwd();

var config = _.clone(baseConfig);
config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({minimize: true})
]);

module.exports = config;