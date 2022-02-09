import React from "react";
import { Grid } from "@mui/material";

export default function CenterContainer(props) {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}
