import PlayCircle from "@mui/icons-material/PlayCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import debuglog from "./logger";
import { IParsed } from "./parser";
import { alpha } from "@mui/system";

interface IEpisode {
  parseData: IParsed;
}

function episodeTile(props: IEpisode) {
  const [hover, setHovered] = React.useState(false);
  const [element, setElement] = React.useState<HTMLElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canPlay = props.parseData.playUrl !== "";

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  React.useEffect(() => {
    if (props.parseData.thumbnail) {
      setElement(
        props.parseData.thumbnail.cloneNode(true) as HTMLPictureElement
      );
    }
  }, []);

  React.useEffect(() => {
    if (element && containerRef.current) {
      containerRef.current.insertBefore(
        element,
        containerRef.current.firstChild
      );
    }
  }, [element]);

  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={
          canPlay
            ? props.parseData.playUrl
            : "#av-ep-episodes-" + (props.parseData.episodeId - 1).toString()
        }
      >
        <Tooltip
          arrow
          title={
            props.parseData.playText +
            (props.parseData.resumeText
              ? " : " + props.parseData.resumeText
              : "")
          }
        >
          <Paper
            sx={{
              p: 1,
              backgroundColor: "#00050d",
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              // eslint-disable-next-line @typescript-eslint/naming-convention
              "& picture": {
                position: "absolute",
                opacity: hover ? "1" : "0.2",
                // visibility: hover ? undefined : "hidden",
                overflow: "hidden",
              },
            }}
            elevation={hover ? 3 : 0}
            ref={containerRef}
          >
            <Box>{props.parseData.watched}</Box>
            <Box
              sx={{
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                height: "2.5em",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  color: canPlay ? undefined : "gray",
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
                  visibility: hover ? "hidden" : undefined,
                }}
              />
              <Grow in={hover}>
                {canPlay ? (
                  <PlayCircle
                    sx={{
                      position: "absolute",
                      fontSize: "2em",
                      color: alpha("#fff", 0.8),
                    }}
                  />
                ) : (
                  <ErrorIcon sx={{ position: "absolute", fontSize: "2em" }} />
                )}
              </Grow>
            </Box>
          </Paper>
        </Tooltip>
      </a>
    </Box>
  );
}

export default episodeTile;
