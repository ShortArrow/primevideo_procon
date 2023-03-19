import { Grid } from "@mui/material";
import React from "react";
import EpisodeTile from "./epsodes";
import { IParsed } from "./parser";
interface IApp {
  parsedList: IParsed[];
}

function app(props: IApp) {
  return (
    <Grid container direction="row">
      {props.parsedList.map((item, key) => (
        <Grid xs={2} md={1} key={key}>
          <EpisodeTile parseData={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default app;
