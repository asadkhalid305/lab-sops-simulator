// packages
import React from "react";
import { Grid, List, ListItem, ListItemText } from "@mui/material";

export default function CustomList(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <List>
          {props.list.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
