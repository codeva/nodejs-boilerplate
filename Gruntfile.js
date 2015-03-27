module.exports = function( grunt ) {
  
  var jadeFiles = { "example/site/index.html": [ "example/templates/index.jade" ] };
  var readContext = function( dest, src ) { return require( "./example/context.json" ); }
  
  grunt.initConfig({
    jade: {
      production: {
        options: {
          data: readContext
        },
        files: jadeFiles
      },
      development: {
        options: {
          data: readContext,
          pretty: true,
          development: true
        },
        files: jadeFiles
      }
    },
    watch: {
      html: {
        files: [ "**/*.jade", "**/*.js", "**/*.css", "**/*.json", "sections/*" ],
        tasks: [ "jade:development" ],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks( "grunt-contrib-jade" );
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask( "default", [ "jade:production" ] );
  
}