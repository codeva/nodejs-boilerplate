module.exports = function( grunt ) {
  grunt.config(
    "copy",
    {
      default: "<%= pkg.grunt.tasks.copy.files %>"
    }
  );
}