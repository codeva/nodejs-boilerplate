var Path = require( "path" );
var Fs = require( "fs" );
var Async = require( "async" );

module.exports = function( grunt ) {
  var isDevelopment = grunt.config( "env" ) === "development";
  
  jadeConfig = {};
  for ( var i = 0; i < grunt.config( "pkg" ).grunt.tasks.jade.context.length; ++i ) {
    context = grunt.config( "pkg" ).grunt.tasks.jade.context[ i ];
    contextRoot = context.root;
    var dataFunction = readContext.bind( null, contextRoot, isDevelopment );
    jadeConfig[ context.name ] = {
      files: context.files,
      options: {
        data: dataFunction,
        pretty: isDevelopment
      }
    }
  }
  grunt.config( "jade", jadeConfig );
}

var readContext = function( contextRootDirectory, isDevelopment, dest, src ) {
  var baseName = dest.substring( dest.lastIndexOf( "/" ) + 1 ) || dest;
  baseName = baseName.substring( 0, baseName.lastIndexOf( "." ) ) || baseName;
  context = require( Path.join( process.cwd(), contextRootDirectory ) );
  if ( context.sections ) {
    readContentFiles( context.sections, contextRootDirectory ); 
  }
  if ( isDevelopment === true ) {
    context.development = true;
  }
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
