import React from "react";
import Grid from "@material-ui/core/Grid";

import "../../sass/App.scss";
import Header from "../../components/layout/header";
import Box from "../../components/layout/box";
import Card from "../../components/layout/card";
import BarChart from "../../components/charts/bar";
import DonutChart from "../../components/charts/donut";
import LineChart from "../../components/charts/line";
import Layout from "../../components/layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Header title="Bem vindo ao Cockpit Ergon" />
        <Box marginTop={2}>
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
      </Layout>
    </>
  );
}
