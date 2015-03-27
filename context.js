var Path = require( "path" );
var Fs = require( "fs" );
var Async = require( "async" );

exports.read = function( dest, src, contextRootDirectory ) {
  var baseName = dest.substring( dest.lastIndexOf( "/" ) + 1 ) || dest;
  baseName = baseName.substring( 0, baseName.lastIndexOf( "." ) ) || baseName;
  contextFile = "./" + Path.join( contextRootDirectory, baseName + ".json" );
  context = require( contextFile );
  Async.eachSeries(
    context.sections,
    function( section, cb ) {
      if ( section.path ){
        console.log( Path.join( contextRootDirectory, section.path ) );
        section.content = Fs.readFileSync( Path.join( contextRootDirectory, section.path ) );
      }
      cb();
    },
    function( err ){
      if( err ) {
        throw new Error( err );
      }
    }
  );
  return context;
};