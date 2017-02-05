module.exports = function (grunt) {
  var src = [
    'server/**/*.ts',
    'common/**/*.ts'
  ];

  grunt.config.set('ts', {
    'backend-dev': {
      src: src,
      options: {
        module: 'commonjs',
        fast: 'never',
        sourceMap: true
      }
    },
    'backend-prod': {
      src: src,
      options: {
        module: 'commonjs',
        fast: 'never',
        sourceMap: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
};
