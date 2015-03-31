module.exports = function( grunt ) {
  grunt.config(
    "copy",
    {
      default: {
        files: "<%= pkg.grunt.tasks.copy.files %>"
      }
    }
  );
}