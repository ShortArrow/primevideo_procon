import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
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
          <Grid xs={2} md={1} key={key} px={.3}>
            <EpisodeTile parseData={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default app;
