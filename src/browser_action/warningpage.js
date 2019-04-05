function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        tabs.forEach(tab => {
        chrome.tabs.executeScript(tab.id, { file: "/src/browser_action/backbutton.js" }, result => {
        const lastErr = chrome.runtime.lastError;
        if (lastErr) console.log('tab: ' + tab.id + ' lastError: ' + JSON.stringify(lastErr));
    });
})
    });
}

document.getElementById('GoBack').addEventListener('click', () => history.back());