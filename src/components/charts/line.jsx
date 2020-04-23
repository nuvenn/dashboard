import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function LineChart(props) {
  const [width] = useState(window.innerWidth > 430 ? 430 : "100%");

  const chart = {
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [38, 40, 42, 45, 43, 40, 41, 45],
      },
    ],
  };

  return (
    <>
      <Chart
        options={chart.options}
        series={chart.series}
        type="line"
        width={width}
      />
    </>
  );
}
