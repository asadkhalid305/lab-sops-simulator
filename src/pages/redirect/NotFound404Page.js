// packages
import React from "react";
import { Grid } from "@mui/material";

// styles
import "./NotFound404Page.css";

export function NotFound404Page() {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
        spacing={0}
      >
        <Grid item>
          <h1 className="text-404">404</h1>
          <h2>Page not found</h2>
        </Grid>
      </Grid>
    </div>
  );
}
