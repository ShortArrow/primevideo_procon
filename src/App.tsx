import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import EpisodeTile from "./epsodes";
import { IParsed } from "./parser";

interface IApp {
  parsedList: IParsed[];
}

function app(props: IApp) {
  const { parsedList } = props;
  return (
    <Box color="white" sx={{ width: "80vw", py: 0.3 }}>
      <Grid container>
        {parsedList.map((item, key) => (
          <Grid xs={3} sm={2} md={1} key={key} sx={{ p: 0.3 }}>
            <EpisodeTile parseData={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default app;
