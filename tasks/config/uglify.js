module.exports = function( grunt ) {
  var isDevelopment = grunt.config( "env" ) === "development";
  grunt.config(
    "uglify",
    {
      default: {
        options: {
          beautify: isDevelopment
        },
        files: "<%= pkg.grunt.tasks.uglify.files %>"
      }
    }
  );
}