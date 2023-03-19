import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import React from "react";
import debuglog from "./logger";
import { IParsed } from "./parser";

interface IEpisode {
  parseData: IParsed;
}

function episodeTile(props: IEpisode) {
  debuglog(props.parseData.episodeId.toString());
  return (
    <Box sx={{ position: "relative" }}>
      <Paper sx={{ p: 1, backgroundColor: "#00050d" }}>
        <div>{props.parseData.watched}</div>
        <Box sx={{ display: "flex" }}>
          {props.parseData.episodeId}
          <CircularProgress
            variant="determinate"
            value={props.parseData.percentage}
            disableShrink
            sx={{
              color: "#1a98ff",
            }}
          />
        </Box>
        {/* {params.thumbnail} */}
      </Paper>
    </Box>
  );
}

export default episodeTile;
