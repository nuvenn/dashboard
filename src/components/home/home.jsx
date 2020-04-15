import React from "react";
import Grid from "@material-ui/core/Grid";

import "../../sass/App.scss";
import Container from "../layout/container";
import Box from "../layout/box";
import PieChart from "../charts/pie";
import Card from "../layout/card";

export default function Home() {
  return (
    <>
      <Container>
        <Box>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card>
              <PieChart></PieChart>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card>
              <PieChart></PieChart>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card>
              <PieChart></PieChart>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
