window.onload = function() {
  var login = document.getElementById("login");
  var output = document.getElementById("container");

  login.onclick = function() {

    var redirectUrl = "https://" + chrome.runtime.id + ".chromiumapp.org/";
    // var redirectUrl = "chrome-extension://nedelbhilbelbeedifgbehlcmpkoifim/index.html";
    var clientId = "f6a9a7526b7449a983f1cc96abe12cde";
    var authUrl = "https://instagram.com/oauth/authorize/?" +
        "client_id=" + clientId + "&" +
        "response_type=token&" +
        "redirect_uri=" + encodeURIComponent(redirectUrl);
    var id = {
      url: authUrl,
      "interactive": true
    };
    chrome.identity.launchWebAuthFlow(id, function(responseUrl){
      var accessToken = responseUrl.substring(responseUrl.indexOf("=") + 1);
      var api = new InstagramAPI(accessToken);
      localStorage.setItem("access_token", accessToken);
      api.request("users/self/feed")
      .done(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          var instagramPost = response.data[i];
          var imgURL = instagramPost.images.standard_resolution.url;
          var $itemContainer = $('<div class="item">');
          $itemContainer.append('<img src="' + imgURL + '">');
          $(output).append($itemContainer);
        }
        $('#container').imagesLoaded( function(){
          loadIsotope();
        });
      })
      .error(function(response){
        console.log(response);
      });
    });
  };
};



function InstagramAPI(accessToken) {
  this.request = function (method){
    return $.ajax({
      url: 'https://api.instagram.com/v1/' + method + "?access_token=" + accessToken,
      type: 'GET'
    });
  };
}
