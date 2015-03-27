var Path = require( "path" );

exports.read = function( dest, src, contextRootDirectory ) {
  var baseName = dest.substring( dest.lastIndexOf( "/" ) + 1 ) || dest;
  baseName = baseName.substring( 0, baseName.lastIndexOf( "." ) ) || baseName;
  contextFile = "./" + Path.join( contextRootDirectory, baseName + ".json" );
  console.log( contextFile );
  return require( contextFile );
};