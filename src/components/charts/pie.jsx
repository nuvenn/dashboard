import React from "react";
import { VictoryPie } from "victory";

let pallete = ["#50514F", "#F25F5C", "#FFE066", "#247BA0", "#70C1B3"];

export default function PieChart(props) {
  return (
    <>
      <VictoryPie
        height={256}
        innerRadius={50}
        data={[
          { x: "Sucesso", y: 15 },
          { x: "Cancelado", y: 20 },
          { x: "Enviado", y: 25 },
          { x: "Analise", y: 15 },
          { x: "Pendente", y: 25 },
        ]}
        colorScale={pallete}
        style={{
          data: {
            cursor: "pointer",
          },
        }}
      />
    </>
  );
}
