module.exports = function( grunt ) {
  grunt.config(
    "watch",
    {
      html: {
        files: [
          ".rebooted",
          "**/*.jade",
          "**/*.js",
          "!**/*.min.js",
          "**/*.styl",
          "**/*.json",
          "!**/test/*json",
          "**/*.section.html"
        ],
        tasks: [ "default" ],
        options: {
          interrupt: true,
          livereload: true
        }
      } 
    }
  );
}