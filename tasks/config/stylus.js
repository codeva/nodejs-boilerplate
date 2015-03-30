module.exports = function( grunt ) {
  grunt.config(
    "stylus",
    {
      compile: {
        files: "<%= pkg.grunt.tasks.stylus.files %>"
      }
    }
  );
}