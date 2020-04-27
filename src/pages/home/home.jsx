import React from "react";
import Grid from "@material-ui/core/Grid";

import RadarChart from "../../components/charts/radar";

export default function Home() {
  return (
    <>
      <Grid item xs={12}>
        <RadarChart />
      </Grid>
    </>
  );
}
