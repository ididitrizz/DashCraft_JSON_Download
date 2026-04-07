document.getElementById('downloadBtn').addEventListener('click', () => {
  const inputElement = document.getElementById('trackInput');
  const inputVal = inputElement.value.trim();
  const status = document.getElementById('status');

  if (!inputVal) {
    status.style.color = "#e74c3c";
    status.innerText = "Please enter a link or ID.";
    return;
  }

  let trackId = "";

  // Regex to extract ID from URL or take raw ID
  if (inputVal.includes("?t=")) {
    const match = inputVal.match(/[?&]t=([^&]+)/);
    trackId = match ? match[1] : "";
  } else {
    trackId = inputVal;
  }

  if (trackId) {
    status.style.color = "#27ae60";
    status.innerText = `Downloading: ${trackId}`;
    
    // Send to background service worker
    chrome.runtime.sendMessage({ type: "DOWNLOAD_TRACK", id: trackId });

    // --- CLEAR THE INPUT ---
    inputElement.value = ""; 
    inputElement.focus(); // Returns cursor to the box for the next link
  } else {
    status.style.color = "#e74c3c";
    status.innerText = "Invalid link format.";
  }
});
