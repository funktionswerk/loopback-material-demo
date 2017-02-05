module.exports = function(grunt) {

  grunt.config.set('concurrent', {
    options: {
      logConcurrentOutput: true
    },
    'dev': ['webpack:dev']
  });

  grunt.loadNpmTasks('grunt-concurrent');
};