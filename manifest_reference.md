{

  "manifest_version": 2,
  "name": "Tabstagram",
  "version": 1.0,

  "permissions": [
    "tabs",
    "identity",
    "storage",
    "https://api.instagram.com/*"
  ],


// background object refers to anything that must always be active/running
// chrome docs: "Any library scripts used by the event page need to be added to the "background" field first"
//

  "background": {
      "scripts": [
        "javascripts/jquery-2.0.3.js",
        "javascripts/jquery.isotope.js",
        "javascripts/underscore.js",
        "javascripts/backbone.js",
        "extensioninstall.js"
      ]
    },


// this will allow me to access an app resource externally through Tabstagram chrome url
"web_accessible_resources": [
    "images/image1.png",
    "script/myscript.js"
  ],


// the browser_action object refers to the app functionality in upper right portion of Chrome browser
  "browser_action": {
    "default_icon": "images/ig.png",
    "default_title": "Tabstagram",      //shown in tooltip
    "default_popup": "landing.html"     //first step: page to send user to IG authentication
  },

// stubbing an option page for my app, to be used after I implement the 'default' user feed image pulling
  "options_page": "options.html",


// this will be called every time the user opens a new tab in the browser
  "chrome_url_overrides": {
    "newtab": "index.html"
  }

}

