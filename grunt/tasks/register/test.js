module.exports = function (grunt) {

  grunt.registerTask('test-backend', [
    'clean:backend',
    'ts:backend-dev',
    'exec:lb-sdk'
  ]);

};