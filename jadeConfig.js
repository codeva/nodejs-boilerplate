
var Context = require( "./context" );

exports.createConfig = function( jadeFiles, contextRoot ) {
  return {
    production: exports.createConfigProduction( jadeFiles, contextRoot ),
    development: exports.createConfigDevelopment( jadeFiles, contextRoot )
  }
}

exports.createConfigProduction = function( jadeFiles, contextRoot ) {
  return {
    options: {
      data: function( dest, src ) {
        return Context.read( dest, src, contextRoot );
      }
    },
    files: jadeFiles
  }
}

exports.createConfigDevelopment = function( jadeFiles, contextRoot ) {
  return {
    options: {
      data: function( dest, src ) {
        data = Context.read( dest, src, contextRoot );
        data.development = true;
        return data;
      },
      pretty: true
    },
    files: jadeFiles
  }
}
