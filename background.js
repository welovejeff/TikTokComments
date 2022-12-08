// Listen for when the user clicks on the extension's icon
chrome.browserAction.onClicked.addListener(function() {
  // Get the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Inject the scraping code into the page
    chrome.tabs.executeScript(tabs[0].id, { file: "scraper.js" });
  });
});
