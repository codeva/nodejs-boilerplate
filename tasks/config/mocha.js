module.exports = function( grunt ) {
  grunt.config(
    "mochaTest", {
      test: {
        options: {
          reporter: "spec",
          quiet: true
        },
        src: "<%= pkg.grunt.tasks.mocha.src %>"
      }
    }
  );
}