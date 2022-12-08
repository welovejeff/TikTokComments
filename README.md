# TikTokComments
Created by Open AI's Chatbot
Prompt given: "Write me a chrome extension that will scrape TikTok comments into a spreadsheet"

Here is an example of a simple Chrome extension that will scrape TikTok comments and export them to a spreadsheet:

1. First, create a new folder for the extension and create a file called manifest.json inside it. This file will contain the extension's metadata and specify its permissions and behaviors.

```
{
  "manifest_version": 2,
  "name": "TikTok Comment Scraper",
  "version": "1.0",
  "description": "Scrapes comments from TikTok videos and exports them to a spreadsheet.",
  "permissions": [
    "activeTab",
    "https://*.tiktok.com/*"
  ],
  "background": {
    "scripts": ["background.js"]
  },
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  }
}
```

2. Next, create the background.js file, which will contain the code that runs in the background of the extension. This code will listen for when the user clicks on the extension's icon in the toolbar, and then scrape the comments from the current TikTok video.

```
// Listen for when the user clicks on the extension's icon
chrome.browserAction.onClicked.addListener(function() {
  // Get the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Inject the scraping code into the page
    chrome.tabs.executeScript(tabs[0].id, { file: "scraper.js" });
  });
});
```

3. Next, create the scraper.js file, which will contain the code that actually scrapes the comments from the TikTok video. This code will use the fetch API to request the comments data from the TikTok API, and then parse the response to extract the comments.

```
// Get the current video ID from the URL
const videoId = window.location.href.split("/").pop();

// Construct the URL for the TikTok API endpoint that returns the comments for the current video
const apiUrl = `https://www.tiktok.com/share/item/list?sec_uid=&id=${videoId}&type=3&count=100&min_cursor=0&max_cursor=0&share_user_id=0&share_dytk=`;

// Use the fetch API to request the comments data from the TikTok API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the comments from the response
    const comments = data.body.comments;

    // Convert the comments to a CSV format
    const csv = comments
      .map(comment => `"${comment.text}","${comment.user.nickname}"`)
      .join("\n");

    // Create a URL for the CSV data
    const csvUrl = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;

    // Download the CSV file
   
```

To load your own Google Chrome extension, follow these steps:

Open Google Chrome and go to chrome://extensions/ in the address bar.

Enable the "Developer mode" toggle in the top right corner of the page.

Click the "Load unpacked" button and select the folder that contains your extension's files.

Your extension should now appear in the list of installed extensions. You can click on its "Details" button to view its options and manage its permissions.

To use the extension, click on its icon in the toolbar. Depending on the extension's behavior, it may open a new window, change the current page, or display a popup menu.

Note: If you make any changes to the extension's files, you will need to click the "Reload" button next to the extension in the list of installed extensions in order for the changes to take effect.
