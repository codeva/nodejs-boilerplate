var Glob = require( "glob" );

module.exports = function( grunt ) {

  var config = {
      pkg: grunt.file.readJSON( "package.json" ),
      env: grunt.option( "env" ) || process.env.GRUNT_ENV || "production"
    };
  
  grunt.initConfig( config );
  
  var tasksConfigPath = "./tasks/config/"
  var configFiles = Glob.sync( "*", { cwd: tasksConfigPath } );
  configFiles.forEach( function( configFile ) {
    key = configFile.replace( /\.js$/, "" );
    grunt.config( key, require( tasksConfigPath + configFile ) );
  });

  grunt.loadNpmTasks( "grunt-contrib-stylus" );
  grunt.registerTask( "default", config.pkg.grunt.tasks.default );
  
}
