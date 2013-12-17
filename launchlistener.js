// packaged app and extensions have different API permissions, per google extension docs, now switching to packaged app
// http://www.youtube.com/watch?v=rQGjwsjtdwY
// see http://developer.chrome.com/extensions/runtime.html
//

// chrome.app.runtime.onLaunched.addListener(function(intentData) {
//     chrome.app.window.create('index.html', {
//             id: "instagramAuthWinID",
//         bounds: {
//             width: 500,
//             height: 309
//         }
//     });
// });

$(document).ready(function(){


var url = 'https://api.instagram.com/oauth/authorize/?client_id=f6a9a7526b7449a983f1cc96abe12cde&redirect_uri=https%3A%2F%2Fchcpgnakcofgaemebonicchbclcjkkef.chromiumapp.org%2F&response_type=token';



  $('div').on("click", function(){

    console.log("user clicked login button");
    window.location.href = url;

  });

});


