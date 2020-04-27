import React from "react";
import Grid from "@material-ui/core/Grid";

import AreaChart from "../../components/charts/area";
import ScrollableTabs from "../../components/layout/ui/scrollableTabs";

export default function TotaisFolha() {
  return (
    <>
      <Grid item xs={12}>
        <ScrollableTabs
          tabs={[
            "Situação",
            "Empresa/Subempresa",
            "Categoria",
            "Folha de Pagamento",
            "Rubrica",
          ]}
          data={{}}
          content={<AreaChart />}
        />
      </Grid>
    </>
  );
}
