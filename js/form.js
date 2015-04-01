var form = angular.module( "form", [] );

form.controller( "FormCtrl", function ( $scope, $http ){
  this.isFormSent = false;
  this.isError = false;
  this.fields = {};

  this.sendForm = function( mailerUrl ){
    if ( !mailerUrl ){
      mailerUrl = "php/formMailer.php";
    }
    var thisCtrl = this;
    requestData = {
      senderEmail: this.fields.email,
      senderMessage: this.fields.text
    }
    if ( this.fields.name ){
      requestData.senderName = this.fields.name;
    }
    if ( this.fields.phone ){
      requestData.senderPhone = this.fields.phone;
    }
    
    $http.post( mailerUrl, requestData).
    success( function( data, status, headers, config ){
      console.log( "STATUS:", status );
      thisCtrl.onSuccess();
    }).
    error( function( data, status, headers, config ){
      console.log( "STATUS:", status );
      thisCtrl.onFailure();
    });
  }

  this.onSuccess = function(){
    this.isFormSent = true;
    this.isError = false;
    this.fields = {};
    $scope.contactForm.$setPristine();
    $scope.contactForm.$setSubmitted();
  }
  
  this.onFailure = function(){
    this.isFormSent = false;
    this.isError = true;
  }
  
});