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
    require( tasksConfigPath + configFile )( grunt )
  });

  grunt.loadNpmTasks( "grunt-contrib-jade" );
  grunt.loadNpmTasks( "grunt-contrib-stylus" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.registerTask( "default", config.pkg.grunt.tasks.default );
  
}
