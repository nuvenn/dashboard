import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function RadarChart(props) {
  const [width] = useState("100%");

  const chart = {
    options: {
      labels: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      colors: ["#701f38", "#D23666"],
    },
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 23, 10, 15, 22, 33, 35, 35, 30],
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15, 16, 21, 22, 23, 20, 25],
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
