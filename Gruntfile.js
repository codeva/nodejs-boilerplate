var Glob = require( "glob" );
var Path = require( "path" );

module.exports = function( grunt ) {

  grunt.config( "env",  grunt.option( "env" ) || process.env.GRUNT_ENV || "production" );
  
  var tasksConfigPath = "tasks/config/"
  var configFiles = Glob.sync( "*", { cwd: Path.join( __dirname, tasksConfigPath ) } );
  configFiles.forEach( function( configFile ) {
    require( "./" + tasksConfigPath + configFile )( grunt )
  });

  require( "load-grunt-tasks" )( grunt );
  grunt.registerTask( "default", grunt.config( "pkg" ).grunt.tasks.default );
  
}
