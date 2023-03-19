import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import EpisodeTile from "./epsodes";
import { IParsed } from "./parser";
interface IApp {
  parsedList: IParsed[];
}

function app(props: IApp) {
  return (
    <Box py={.8} color="white">
      <Grid container>
        {props.parsedList.map((item, key) => (
          <Grid xs={3} sm={2} md={1} key={key} px={.3} py={.3}>
            <EpisodeTile parseData={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default app;
