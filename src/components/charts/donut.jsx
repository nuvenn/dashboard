import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function DonutChart(props) {
  const [width] = useState(window.innerWidth > 430 ? 392 : "100%");

  const chart = {
    options: {
      colors: ["#701F38", "#D69F92", "#70301F", "#ffd6e2", "#D23666"],
    },
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
