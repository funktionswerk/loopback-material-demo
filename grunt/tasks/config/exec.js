module.exports = function (grunt) {

  grunt.config.set('exec', {
    'lb-sdk': {
      cmd: './node_modules/.bin/lb-sdk server/server.js app/sdk'
    }
  });

  grunt.loadNpmTasks('grunt-exec');
};
