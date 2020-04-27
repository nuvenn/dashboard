import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function AreaChart(props) {
  const [width] = useState(window.innerWidth > 1200 ? 800 : "100%");

  const chart = {
    options: {
      chart: {
        id: "basic-area",
      },
      series: [
        {
          data: [
            {
              x: new Date("2018-02-12").getTime(),
              y: 76,
            },
            {
              x: new Date("2018-02-12").getTime(),
              y: 76,
            },
          ],
        },
      ],
      xaxis: {
        type: "datetime",
      },
      colors: ["#701f38"],
    },
    series: [
      {
        data: [
          {
            x: new Date("2014-02-12").getTime(),
            y: 18,
          },
          {
            x: new Date("2015-02-12").getTime(),
            y: 26,
          },
          {
            x: new Date("2016-02-12").getTime(),
            y: 30,
          },
          {
            x: new Date("2017-02-12").getTime(),
            y: 35,
          },
          {
            x: new Date("2018-02-12").getTime(),
            y: 24,
          },
          {
            x: new Date("2019-02-12").getTime(),
            y: 26,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Chart
        options={chart.options}
        series={chart.series}
        type="area"
        width={width}
      />
    </>
  );
}
