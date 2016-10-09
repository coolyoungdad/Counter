// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
        file: 'jquery-3.1.1.slim.min.js'
    });
  chrome.tabs.executeScript(null, {
    file: "autoScroll.js"
  });
});


