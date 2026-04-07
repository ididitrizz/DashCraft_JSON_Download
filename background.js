chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "DOWNLOAD_TRACK") {
    const jsonUrl = `https://cdn.dashcraft.io/v2/prod/track/${message.id}.json`;

    // 1. Try to fetch the headers of the file first
    fetch(jsonUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // 2. If it exists, proceed with download
          chrome.downloads.download({
            url: jsonUrl,
            filename: `dashcraft_track_${message.id}.json`,
            saveAs: false
          });
        } else {
          // 3. If it's a 404 or other error, notify the popup
          chrome.runtime.sendMessage({ 
            type: "ERROR", 
            message: `Track ${message.id} not found (404).` 
          });
        }
      })
      .catch(err => {
        chrome.runtime.sendMessage({ 
          type: "ERROR", 
          message: "Network error or CDN is down." 
        });
      });
  }
});
