// AreaChart.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AreaChart = () => {
  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'US and USSR Nuclear Stockpiles'
    },
    xAxis: {
      categories: ['1940', '1950', '1960', '1970', '1980', '1990', '2000']
    },
    series: [
      {
        name: 'USA',
        data: [0, 100, 500, 1500, 3000, 4500, 5000]
      },
      {
        name: 'USSR/Russia',
        data: [0, 50, 200, 1500, 3000, 4000, 4500]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaChart;
