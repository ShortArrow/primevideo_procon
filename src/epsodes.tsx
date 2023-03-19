import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import debuglog from "./logger";
import { IParsed } from "./parser";

interface IEpisode {
  parseData: IParsed;
}

function episodeTile(props: IEpisode) {
  debuglog(props.parseData.episodeId.toString());
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <div>{props.parseData.watched}</div>
        <Box sx={{ display: "flex" }}>
          {props.parseData.episodeId}
          <CircularProgress
            variant="determinate"
            value={props.parseData.percentage}
            disableShrink
            sx={{
              color: "blue",
            }}
          />
        </Box>
      </Box>
      {/* {params.thumbnail} */}
    </>
  );
}

export default episodeTile;
