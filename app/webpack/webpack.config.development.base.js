var _ = require('lodash');
var baseConfig = require('./webpack.config.base');

var config = _.clone(baseConfig);
config.devtool = 'inline-source-map';

module.exports = config;