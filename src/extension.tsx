import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import debuglog from "./logger";
import parser from "./parser";

const extensionRootName = "pvconroot";
const extensionRootSelector = "#" + extensionRootName;

export function extension() {
  const controller = document.getElementById("pv-nav-container");
  const epList = document.querySelectorAll("[id^='av-ep-episodes-']");
  const res = parser(epList);
  res.forEach((v) => {
    console.debug(v);
  });
  const app = <App parsedList={res}></App>;

  if (controller) {
    debuglog("found container");

    // create root seed for embed
    const rootSeed = document.createElement("div");
    rootSeed.id = extensionRootName;

    // Embed root seed
    controller.insertAdjacentElement("afterbegin", rootSeed);

    // Get root
    const root = controller.querySelector(extensionRootSelector);

    if (root) {
      debuglog("found root");

      // Render on root
      const approot = ReactDOMClient.createRoot(root);
      approot.render(app);
    }
  }
}
