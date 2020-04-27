import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  conteiner: {
    margin: "0 !important",
  },
});

export default function BoxContainer(props) {
  const classes = useStyles();

  return (
    <>
      <Box
        justify="center"
        m={props.margin}
        mt={props.marginTop}
        mb={props.marginBottom}
      >
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={2} justify={props.justify}>
            {props.children}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
