$( document ).ready(function() {


  console.log( "send user to instagram authorization page!" );




  $( "#login" ).on( "click", function( event ) {

    console.log("user clicked login button");

    var url = 'https://instagram.com/oauth/authorize/?client_id=f6a9a7526b7449a983f1cc96abe12cde&redirect_uri=https%3A%2F%2Fchcpgnakcofgaemebonicchbclcjkkef.chromiumapp.org%2F&response_type=token';

    $(location).attr('href', url);

  });


});
