window.onload = function() {
  var login = document.getElementById("login");
  var output = document.getElementById("output");

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
      api.request("users/self/feed", undefined, function(data) {
        console.log(data);

        output.textContent = JSON.stringify(data, null, 4);
      });
    });
  };
};

function InstagramAPI(accessToken) {
  this.request = function(method, args, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(JSON.parse(xhr.response));
    };

    xhr.open("GET", "https://api.instagram.com/v1/" + method + "?access_token=" + accessToken);
    xhr.send();
  };
}
