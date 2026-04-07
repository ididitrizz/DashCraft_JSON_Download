const downloadBtn = document.getElementById('downloadBtn');
const trackInput = document.getElementById('trackInput');
const status = document.getElementById('status');

downloadBtn.addEventListener('click', () => {
  const inputVal = trackInput.value.trim();

  if (!inputVal) {
    status.style.color = "#e74c3c";
    status.innerText = "Please enter a link or ID.";
    return;
  }

  let trackId = "";
  if (inputVal.includes("?t=")) {
    const match = inputVal.match(/[?&]t=([^&]+)/);
    trackId = match ? match[1] : "";
  } else {
    trackId = inputVal;
  }

  if (trackId) {
    // START LOADING STATE
    status.style.color = "#3498db";
    status.innerText = "Checking CDN...";
    downloadBtn.disabled = true;
    downloadBtn.innerText = "Working...";
    downloadBtn.style.backgroundColor = "#95a5a6";

    // Send to background
    chrome.runtime.sendMessage({ type: "DOWNLOAD_TRACK", id: trackId });

    // Clear input
    trackInput.value = "";
    trackInput.focus();
  } else {
    status.style.color = "#e74c3c";
    status.innerText = "Invalid link format.";
  }
});

// Listen for response from background script
chrome.runtime.onMessage.addListener((message) => {
  // RESET BUTTON
  downloadBtn.disabled = false;
  downloadBtn.innerText = "Download JSON";
  downloadBtn.style.backgroundColor = "#2ecc71";

  if (message.type === "ERROR") {
    status.style.color = "#e74c3c";
    status.innerText = message.message;
  } else if (message.type === "SUCCESS") {
    status.style.color = "#27ae60";
    status.innerText = "Download started!";
  }
});
