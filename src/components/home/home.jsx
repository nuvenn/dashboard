import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import "../../sass/App.scss";
import Container from "../layout/container";
import Menu from "../layout/menu";
import Header from "../layout/header";
import Box from "../layout/box";
import Card from "../layout/card";
import BarChart from "../charts/bar";
import DonutChart from "../charts/donut";
import LineChart from "../charts/line";

export default function Home() {
  const [open, setOpen] = useState(true);

  const toggleMenu = function () {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <Container>
        <Menu open={open} toggleMenu={toggleMenu} />
        <div className={open ? "main main--opened" : "main"}>
          <Header />
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
        </div>
      </Container>
    </>
  );
}
