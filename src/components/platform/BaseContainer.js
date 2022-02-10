import React from "react";
import { Grid } from "@mui/material";

export default function BaseContainer(props) {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        <Grid style={{ minHeight: "80vh", minWidth: "80vw" }} item xs={3}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}
