var Path = require( "path" );
var Fs = require( "fs" );
var Async = require( "async" );

module.exports = function( grunt ) {
  var isDevelopment = grunt.config( "env" ) === "development";
  grunt.config(
    "jade",
    {
      compile: {
        files: "<%= pkg.grunt.tasks.jade.context.files %>",
        options: {
          data: function( dest, src ) {
            data = readContext( dest, src, grunt.config( "pkg" ).grunt.tasks.jade.context.root );
            if ( isDevelopment === true ) {
              data.development = true;
            }
            return data;
          },
          pretty: isDevelopment
        }
      }
    }
  );
}

var readContext = function( dest, src, contextRootDirectory ) {
  var baseName = dest.substring( dest.lastIndexOf( "/" ) + 1 ) || dest;
  baseName = baseName.substring( 0, baseName.lastIndexOf( "." ) ) || baseName;
  context = require( Path.join( process.cwd(), contextRootDirectory ) );
  if ( context.sections ) {
    readContentFiles( context.sections, contextRootDirectory ); 
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
