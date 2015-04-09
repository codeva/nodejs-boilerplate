module.exports = function( grunt ) {
  grunt.config(
    "mochaTest", {
      test: {
        options: {
          reporter: "spec",
          quiet: false
        },
        src: "<%= pkg.grunt.tasks.mocha.src %>"
      }
    }
  );
}