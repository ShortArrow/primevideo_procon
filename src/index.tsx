import { extension } from "./extension";
import debuglog from "./logger";

debuglog("wake extension");

function testfunc() {
  debuglog("hey");
}

/**
 * Execute the callback function only when the page rendering is complete.
 * The interval for checking rendering completion is 100ms.
 */
function checkReadyState() {
  if (document.readyState === "complete") {
    debuglog("page rendered");
    extension();
  } else {
    setTimeout(checkReadyState, 100);
  }
}

checkReadyState();
