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
        sourceMap: true,
        lib: ['es2015']
      }
    },
    'backend-prod': {
      src: src,
      options: {
        module: 'commonjs',
        fast: 'never',
        sourceMap: false,
        lib: ['es2015']
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
};
