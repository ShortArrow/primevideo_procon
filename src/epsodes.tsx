import React from "react";
import debuglog from "./logger";
import { IParsed } from "./parser";

function episode(params: IParsed) {
  debuglog(params.episodeId.toString());
  return (
    <>
      <div>{params.episodeId}</div>
      <div>{params.percentage}</div>
      <div>{params.watched}</div>
      {/* {params.thumbnail} */}
    </>
  );
}

export default episode;
