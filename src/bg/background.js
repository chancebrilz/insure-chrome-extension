//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   //chrome.pageAction.show(sender.tab.id);
//   sendResponse();
// });

// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     return {
//       redirectUrl: chrome.runtime.getURL("src/browser_action/warning_page.html")
//     };
//   },
//   { urls: ["https://www.google.com/"], types: ["main_frame", "sub_frame"] }, //redirects users when going to google for testing purposes only
//   ["blocking"]
// );

chrome.tabs.onUpdated.addListener(function(tabId, info) {
  if (info.status === "complete") {
    chrome.tabs.get(tabId, function(tab) {
      const { url } = tab;

      // HERE WE CAN CHECK FOR A VALID/INVALID URL
      console.log("Checking url", url, "...");

      if (url === "https://www.google.com/") {
        chrome.tabs.create(
          {
            url: "/src/browser_action/warning_page.html"
          },
          function() {}
        );
      }
    });
  }
});
