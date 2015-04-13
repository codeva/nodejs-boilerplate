module.exports = function( grunt ) {
  grunt.config(
    "shell",
    {
      mongodb: {
        command: "<%= pkg.grunt.tasks.shell.mongodb.path %> --quiet"
      }
    }
  );
}