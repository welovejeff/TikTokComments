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
   
