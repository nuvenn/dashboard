import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function BarChart(props) {
  const [width] = useState(window.innerWidth > 1200 ? 800 : "100%");

  const chart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      colors: ["#701F38"],
      fill: {
        colors: ["#701f38"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <>
      <Chart
        options={chart.options}
        series={chart.series}
        type="bar"
        width={width}
      />
    </>
  );
}
