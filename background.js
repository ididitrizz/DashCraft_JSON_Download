chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "DOWNLOAD_TRACK") {
    const jsonUrl = `https://cdn.dashcraft.io/v2/prod/track/${message.id}.json`;

    fetch(jsonUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          chrome.downloads.download({
            url: jsonUrl,
            filename: `dashcraft_track_${message.id}.json`
          });
          // Notify popup of success
          chrome.runtime.sendMessage({ type: "SUCCESS" });
        } else {
          chrome.runtime.sendMessage({ 
            type: "ERROR", 
            message: `Track ${message.id} not found.` 
          });
        }
      })
      .catch(() => {
        chrome.runtime.sendMessage({ 
          type: "ERROR", 
          message: "Connection error." 
        });
      });
  }
});
