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

class API {
  apiHost = "http://cosc490.chance.sh/";

  getHost(url) {
    var pathArray = url.split("/");

    return pathArray[2];
  }

  lookup(lookupUrl) {
    const host = this.getHost(lookupUrl);
    const url = `${this.apiHost}?url=${host}`;

    return fetch(url).then(response => response.json());
  }
}

chrome.tabs.onUpdated.addListener((tabId, info) => {
  chrome.tabs.get(tabId, async tab => {
    const { url } = tab;

    if (url) {
      const api = new API();

      const response = await api.lookup(url);

      if (response.malicious === true) {
        chrome.tabs.update(tabId, {
          url: "/src/browser_action/warning_page.html"
        });
      }
    }
  });
});
