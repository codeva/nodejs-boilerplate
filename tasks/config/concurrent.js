module.exports = function( grunt ) {
  grunt.config(
    "concurrent", { //TODO: separate file
      dev: {
        tasks: [ "shell:mongodb", "nodemon", "watch" ],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  );
}