import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export default function BoxContainer(props) {
  return (
    <>
      <Box
        justify="center"
        m={props.margin}
        mt={props.marginTop}
        mb={props.marginBottom}
      >
        <Grid container spacing={2} justify={props.justify}>
          {props.children}
        </Grid>
      </Box>
    </>
  );
}
