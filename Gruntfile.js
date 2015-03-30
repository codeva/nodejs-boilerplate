module.exports = function( grunt ) {
  
  var configPath = grunt.option( "config" ) || "./config";
  var jadeConfigPath = grunt.option( "jade-config" ) || "./jadeConfig";
  var config = require( configPath );
  var jadeConfig = require( jadeConfigPath );
  
  grunt.initConfig({
    stylus: {
      compile: {
        files: config.stylusFiles 
      }
    },
    jade: jadeConfig.createConfig( config.jadeFiles, config.contextRoot ),
    uglify: {
      development: {
        options: {
          beautify: true
        },
        files: config.jsFiles
      },
      production: {
        files: config.jsFiles 
      }
    },
    copy: {
      main: config.copyFiles
    },
    watch: {
      html: {
        files: [ "**/*.jade", "**/*.js", "!**/*.min.js", "**/*.styl", "**/*.json", "**/*.section.html" ],
        tasks: [ "stylus", "jade:development", "newer:uglify:development", "newer:copy" ],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks( "grunt-contrib-jade" );
  grunt.loadNpmTasks( "grunt-contrib-stylus" );
  grunt.loadNpmTasks( "grunt-contrib-uglify" );
  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-newer" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.registerTask( "default", [ "stylus", "jade:production", "uglify:production", "copy" ] );
  
}
