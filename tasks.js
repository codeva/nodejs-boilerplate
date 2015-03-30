var Glob = require( "glob" );

module.exports.loadConfig = function( path ) {
  var config = {};
  var key;
 
  var configFiles = Glob.sync( "*", { cwd: path } );
  configFiles.forEach( function( configFile ) {
    key = configFile.replace( /\.js$/, "" );
    config[ key ] = require( path + configFile );
  });
 
  return config;
}