import React, { useState } from "react";
import Chart from "react-apexcharts";

// let pallete = ["#50514F", "#F25F5C", "#FFE066", "#247BA0", "#70C1B3"];

export default function DonutChart(props) {
  const [width] = useState(window.innerWidth > 430 ? 392 : "100%");

  const chart = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };

  return (
    <>
      <Chart
        options={chart.options}
        series={chart.series}
        type="donut"
        width={width}
      />
    </>
  );
}
