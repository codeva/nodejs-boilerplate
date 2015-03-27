var Context = require( "./context" );

module.exports = function( grunt ) {
  
  var contextDirectory = "example/context";
  var jadeFiles = { "example/site/index.html": [ "example/jade/index.jade" ] };
  var stylusFiles = { "example/site/css/main.css": [ "example/stylus/main.styl" ] };
  
  grunt.initConfig({
    stylus: {
      compile: {
        files: stylusFiles
      }
    },
    jade: {
      production: {
        options: {
          data: function( dest, src ) {
            return Context.read( dest, src, contextDirectory );
          }
        },
        files: jadeFiles
      },
      development: {
        options: {
          data: function( dest, src ) {
            console.log( dest );
            data = Context.read( dest, src, contextDirectory );
            data.development = true;
            return data;
          },
          pretty: true
        },
        files: jadeFiles
      }
    },
    watch: {
      html: {
        files: [ "**/*.jade", "**/*.js", "**/*.styl", "**/*.json" ],
        tasks: [ "stylus", "jade:development" ],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks( "grunt-contrib-jade" );
  grunt.loadNpmTasks( "grunt-contrib-stylus" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.registerTask( "default", [ "stylus", "jade:production" ] );
  
}