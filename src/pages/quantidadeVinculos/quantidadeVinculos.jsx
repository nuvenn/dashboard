import React from "react";
import Grid from "@material-ui/core/Grid";

import BarChart from "../../components/charts/bar";
import ScrollableTabs from "../../components/layout/ui/scrollableTabs";

export default function QuantidadeVinculos() {
  return (
    <>
      <Grid item xs={12}>
        <ScrollableTabs
          tabs={["Situação", "Empresa/Subempresa", "Categoria"]}
          data={{}}
          content={<BarChart />}
        />
      </Grid>
    </>
  );
}
