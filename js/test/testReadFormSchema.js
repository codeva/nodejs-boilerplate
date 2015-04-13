var Should = require( "should" );

var ReadFormSchema = require( "../readFormSchema.js" );

describe( "Read form schema", function() {
  
  var readFormSchema = new ReadFormSchema( __dirname );

  it( "should produce error if the file is not available", function( done ){
    readFormSchema.read( "notExisting", function( err, schema ){
      err.should.be.ok;
      Should.not.exist( schema );
      done();
    });
  });
  
  it( "should create context with form schema from JSON file", function( done ){
    
    readFormSchema.read( "test", function( err, schema ){
      Should.not.exist( err );
      schema.schema.should.equal( "{'type':'object','properties':{'title':{'type':'string','minLength':2,'title':'Title'},'content':{'type':'string','title':'Content'}}}" );
      schema.form.should.equal( "['title',{'key':'content','type':'textarea'},{'type':'submit','title':'Submit'}]" );
      done();
    });
  });
  
});
