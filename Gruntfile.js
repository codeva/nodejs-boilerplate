var Context = require( "./context" );

module.exports = function( grunt ) {
  
  var configPath = grunt.option( "config" ) || "./config";
  var config = require( configPath );
  
  grunt.initConfig({
    stylus: {
      compile: {
        files: config.stylusFiles
      }
    },
    jade: {
      production: {
        options: {
          data: function( dest, src ) {
            return Context.read( dest, src, config.contextRoot );
          }
        },
        files: config.jadeFiles
      },
      development: {
        options: {
          data: function( dest, src ) {
            data = Context.read( dest, src, config.contextRoot );
            data.development = true;
            return data;
          },
          pretty: true
        },
        files: config.jadeFiles
      }
    },
    watch: {
      html: {
        files: [ "**/*.jade", "**/*.js", "**/*.styl", "**/*.json", "**/*.section.html" ],
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
