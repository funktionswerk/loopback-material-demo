var webpack = require('webpack');
var rootDir = process.cwd();

module.exports = function(grunt) {

  grunt.config.set('webpack', {
    options: {
      progress: false,
      watch: true,
      keepalive: true,
      failOnError: false
    },
    dev: require('../../../app/webpack.config.development'),
  });

  grunt.loadNpmTasks('grunt-webpack');
};