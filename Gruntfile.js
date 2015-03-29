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
