import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Paper, Box, Grid } from "@mui/material";

import { selectAvailableSops } from "./standardOperatingProceduresSlice";

import styles from "./StandardOperatingProceduresPage.css";

export function StandardOperatingProceduresPage() {
  const availableSops = useSelector(selectAvailableSops);

  function boxStyle(sop) {
    let style = {
      display: "flex",
      flexWrap: "wrap",
      "& > :not(style)": {
        m: 1,
        width: 220,
        height: 220,
      },
    };

    if (!sop.isEnabled) {
      style = {
        ...style,
        opacity: 0.4,
        pointerEvents: "none",
      };
    }

    return style;
  }
  return (
    <Grid container alignItems="center" justifyContent="center" style={{height: '100vh'}} spacing={2}>
      {availableSops.map((sop) => (
        <Grid key={sop.id} item xs={2.5}>
          <Box sx={() => boxStyle(sop)}>
            <Paper className="sop-box" elevation={5}>
              <Link to={sop.path}>{sop.name}</Link>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
