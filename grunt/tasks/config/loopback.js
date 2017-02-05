module.exports = function (grunt) {

  grunt.config.set('loopback_sdk_angular', {
    options: {
      input: 'server/server.js',
      output: 'app/lb-services/lbServices.js'        // Other task-specific options go here.
    },
    services: {

    }
  });

  grunt.loadNpmTasks( 'grunt-loopback-sdk-angular' );
};
