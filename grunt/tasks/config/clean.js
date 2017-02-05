module.exports = function(grunt) {

  grunt.config(
    'clean',
    {
      backend: {
        src: [
          'common/**/*.js',
          'server/**/*.js',
          'loopback-common/server/**/*.js',
          '!common/util/Container.template.js'
        ]
      },
      frontend: {
        src: [
          '/client/**/*'
        ]
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-clean');
};