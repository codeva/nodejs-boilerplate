var Path = require( "path" );
var Fs = require( "fs" );
var Async = require( "async" );

exports.read = function( dest, src, contextRootDirectory ) {
  var baseName = dest.substring( dest.lastIndexOf( "/" ) + 1 ) || dest;
  baseName = baseName.substring( 0, baseName.lastIndexOf( "." ) ) || baseName;
  contextFile = "./" + Path.join( contextRootDirectory, baseName + ".json" );
  context = require( contextFile );
  readContentFiles( context.sections, contextRootDirectory );
  return context;
};

var readContentFiles = function( elements, rootDirectory ) {
  Async.eachSeries(
    elements,
    function( element, cb ) {
      if ( element.path ){
        element.content = Fs.readFileSync( Path.join( rootDirectory, element.path ) );
      }
      if ( element.sections ) {
        readContentFiles( element.sections, rootDirectory );
      }
      cb();
    },
    function( err ){
      if( err ) {
        throw new Error( err );
      }
    }
  );  
}