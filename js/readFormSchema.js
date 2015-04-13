var Async = require( "async" );
var Fs = require( "fs" );
var Path = require( "path" );

module.exports = function( schemaDirectory )
{

  var privateReadFormSchema = function( schemaID, cb ) {
    Async.parallel(
      {
        schema: function( cb ) {
          Fs.readFile( Path.join( schemaDirectory, schemaID + ".schema.json" ), function( err, data ){
            cb( err, data );
          })
        }
      },
      function( err, results ) {
        if ( err ) {
          cb( err, null );
          return;
        }
        schema = {
          schema: JSON.stringify( JSON.parse( results.schema ).schema ).replace( /"/g, "'" ),
          form: JSON.stringify( JSON.parse( results.schema ).form ).replace( /"/g, "'" )
        };
        cb( null, schema );
      }
    )
  };
  
  return {
    read: privateReadFormSchema
  }
  
}