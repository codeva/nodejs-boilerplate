module.exports = function( grunt ) {

  grunt.config( "pkg", grunt.file.readJSON( "package.json" ) );
  require( "./Gruntfile.js" )( grunt );
  
}
