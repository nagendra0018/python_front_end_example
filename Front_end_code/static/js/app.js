const statusText = document.querySelector("#statusText");
const refreshStatus = document.querySelector("#refreshStatus");

async function loadStatus() {
  statusText.textContent = "Checking application status...";

  try {
    const response = await fetch("/health");
    const data = await response.json();
    statusText.textContent = `Service ${data.service} is ${data.status}.`;
  } catch (error) {
    statusText.textContent = "Unable to reach the Flask health endpoint.";
  }
}

refreshStatus.addEventListener("click", loadStatus);
loadStatus();
