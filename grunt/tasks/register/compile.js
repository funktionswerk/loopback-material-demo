module.exports = function (grunt) {

  grunt.registerTask('compile-prod', [
    'clean:backend',
    'ts:backend-prod'
  ]);

};