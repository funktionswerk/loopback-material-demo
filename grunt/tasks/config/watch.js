module.exports = function (grunt) {

  var watchFilesGlobal = [
    'grunt/**/*.js',
    '**/*.json'
  ];

  var ignoreFiles = [
    '!node_modules/**',
    '!bower_components/**',
    '!client/**',
    '!server/**/*.js',
    '!common/**/*.js',
    '!**/*.ts.ktp.*',
    '!**/*lbServices.js'
  ];

  var watchFilesFrontend = watchFilesGlobal.concat([
    'assets/img/**/*',
    'assets/**/*.styl'
  ]).concat(ignoreFiles);

  var watchFilesBackend = watchFilesGlobal.concat([
    'server/**/*.ts',
    'common/**/*.ts',
    'loopback-common/server/**/*.ts'
  ]).concat(ignoreFiles);

  var watchOptions = {
    interrupt: true,
    debounceDelay: 250
  };

  grunt.config.set('watch', {
    'ts-backend-dev': {
      options: watchOptions,
      files: watchFilesBackend,
      tasks: ['ts:backend-dev']
    },
    'test-backend': {
      options: watchOptions,
      files: watchFilesBackend,
      tasks: ['test-backend']
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
