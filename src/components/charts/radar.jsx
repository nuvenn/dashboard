import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function RadarChart(props) {
  const [width] = useState("100%");

  const chart = {
    options: {
      labels: ["April", "May", "June", "July", "August", "September"],
      colors: ["#701f38"],
    },
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10],
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15],
      },
    ],
  };

  return (
    <>
      <Chart
        options={chart.options}
        series={chart.series}
        type="radar"
        width={width}
      />
    </>
  );
}
