document.getElementById('downloadBtn').addEventListener('click', () => {
  const inputVal = document.getElementById('trackInput').value.trim();
  const status = document.getElementById('status');

  if (!inputVal) {
    status.innerText = "Please enter a link or ID.";
    return;
  }

  let trackId = "";

  // Check if it's a URL or just a raw ID
  if (inputVal.includes("?t=")) {
    const match = inputVal.match(/[?&]t=([^&]+)/);
    trackId = match ? match[1] : "";
  } else {
    // Assume the input is the raw ID itself
    trackId = inputVal;
  }

  if (trackId) {
    status.style.color = "#27ae60";
    status.innerText = `Downloading: ${trackId}`;
    
    // Send to background service worker
    chrome.runtime.sendMessage({ type: "DOWNLOAD_TRACK", id: trackId });
  } else {
    status.style.color = "#e74c3c";
    status.innerText = "Invalid link format.";
  }
});
