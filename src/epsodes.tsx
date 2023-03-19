import PlayCircle from "@mui/icons-material/PlayCircle";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import React from "react";
import debuglog from "./logger";
import { IParsed } from "./parser";

interface IEpisode {
  parseData: IParsed;
}

function episodeTile(props: IEpisode) {
  const [hover, setHovered] = React.useState(false);
  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={props.parseData.playUrl}>
        <Paper sx={{ p: 1, backgroundColor: "#00050d" }}>
          <div>{props.parseData.watched}</div>
          <Box
            sx={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                visibility: hover ? "hidden" : undefined,
              }}
            >
              {props.parseData.episodeId}
            </Box>
            <CircularProgress
              variant="determinate"
              value={props.parseData.percentage}
              disableShrink
              size="1.5em"
              sx={{
                color: "#1a98ff",
              }}
            />
            <Grow in={hover}>
              <PlayCircle
                sx={{
                  position: "absolute",
                  fontSize: "2em",
                }}
              />
            </Grow>
          </Box>
          {/* {params.thumbnail} */}
        </Paper>
      </a>
    </Box>
  );
}

export default episodeTile;
