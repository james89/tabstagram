chrome.app.runtime.onLaunched.addListener(function(intentData) {
    chrome.app.window.create('index.html', {
            id: "instagramAuthWinID",
        bounds: {
            width: 500,
            height: 309
        }
    });
});
