module.exports = function( grunt ) {
  
  var jadeFiles = { "example/site/index.html": [ "example/jade/index.jade" ] };
  var stylusFiles = { "example/site/css/main.css": [ "example/stylus/main.styl" ] };
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
          data: function( dest, src ) {
            data = readContext( dest, src );
            data.development = true;
            return data;
          },
          pretty: true
        },
        files: jadeFiles
      }
    },
    stylus: {
      compile: {
        files: stylusFiles
      }
    },
    watch: {
      html: {
        files: [ "**/*.jade", "**/*.js", "**/*.styl", "**/*.json" ],
        tasks: [ "jade:development", "stylus" ],
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
  grunt.registerTask( "default", [ "jade:production", "stylus" ] );
  
}