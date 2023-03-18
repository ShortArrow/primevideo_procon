import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

console.debug("pv-procon:", "wake");
function checkReadyState() {
  if (document.readyState === "complete") {
    // ページのレンダリングが完了した場合の処理をここに記述する
    console.debug("pv-procon", "start");
    const app = <App readingTime={200}></App>;

    const controller = document.getElementById(
      "pv-nav-container"
    ) as HTMLElement;

    if (controller) {
      console.debug("pv-procon", "found container");
      const root = document.createElement("div") as Element;
      root.id = "pvconroot";
      controller.insertAdjacentElement("afterbegin", root);
      const seed = controller.querySelector("#pvconroot");
      if (seed) {
        console.debug("pv-procon", "found seed");
        const approot = ReactDOMClient.createRoot(seed);
        approot.render(app);
      }
    }
  } else {
    setTimeout(checkReadyState, 100); // 100ミリ秒毎に再チェックする
  }
}
checkReadyState();
