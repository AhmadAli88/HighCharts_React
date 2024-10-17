// PieChart.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2024'
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'Chrome', y: 63.0 },
          { name: 'Firefox', y: 17.0 },
          { name: 'Edge', y: 10.0 },
          { name: 'Safari', y: 8.0 },
          { name: 'Others', y: 2.0 }
        ]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
