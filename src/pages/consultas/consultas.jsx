import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "../../components/layout/ui/card";
import BarChart from "../../components/charts/bar";
import DonutChart from "../../components/charts/donut";
import LineChart from "../../components/charts/line";

export default function Consultas() {
  return (
    <>
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
      <Grid item xs={12} md={6} lg={6} xl={4}>
        <Card>
          <BarChart />
        </Card>
      </Grid>
    </>
  );
}
