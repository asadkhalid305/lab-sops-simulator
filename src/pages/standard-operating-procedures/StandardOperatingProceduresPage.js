import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Paper, Box, Grid } from "@mui/material";

import styles from "./StandardOperatingProceduresPage.css";
import CenterContainer from "../../components/platform/CenterContainer";
import { selectAvailableSops } from "./standardOperatingProceduresSlice";

export function StandardOperatingProceduresPage() {
  const availableSops = useSelector(selectAvailableSops);

  return (
    <CenterContainer>
      <Grid container spacing={2}>
        {availableSops.map((sop) => (
          <Grid key={sop.id} item xs={3}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 220,
                  height: 220,
                },
              }}
            >
              <Paper className="sop-box" elevation={5}>
                <Link to={sop.path}>{sop.name}</Link>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CenterContainer>
  );
}
