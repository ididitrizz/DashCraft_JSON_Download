chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "DOWNLOAD_TRACK") {
    const jsonUrl = `https://cdn.dashcraft.io/v2/prod/track/${message.id}.json`;
    
    chrome.downloads.download({
      url: jsonUrl,
      filename: `dashcraft_track_${message.id}.json`,
      saveAs: true // Opens a "Save As" dialog
    });
  }
});
