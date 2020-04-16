import React from "react";
import Grid from "@material-ui/core/Grid";

import "../../sass/App.scss";
import Container from "../layout/container";
import Box from "../layout/box";
import Card from "../layout/card";
import BarChart from "../charts/bar";
import DonutChart from "../charts/donut";
import LineChart from "../charts/line";

export default function Home() {
  return (
    <>
      <Container>
        <Box>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card>
              <BarChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card>
              <LineChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card>
              <DonutChart />
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
