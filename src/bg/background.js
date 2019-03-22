// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	//chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: chrome.runtime.getURL("src/browser_action/warning_page.html")};
  },
  {urls: ["https://www.google.com/"], types: ["main_frame", "sub_frame"]},  //redirects users when going to google for testing purposes only
  ["blocking"]
);
