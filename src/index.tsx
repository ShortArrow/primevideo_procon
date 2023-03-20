import extension from "./extension";
import debuglog from "./logger";

// Log a message to indicate that the extension is being woken up
debuglog("wake extension");

/**
 * Execute the callback function only when the page rendering is complete.
 * The interval for checking rendering completion is 100ms.
 */
function checkReadyState() {
  // Check if the document is in the "complete" state
  if (document.readyState === "complete") {
    // Log a message to indicate that the page has been rendered
    debuglog("page rendered");
    // Call the extension function
    extension();
  } else {
    // If the document is not yet in the "complete" state, wait for 100ms and check again
    setTimeout(checkReadyState, 100);
  }
}

// Call the checkReadyState function to start checking for rendering completion
checkReadyState();
