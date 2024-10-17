// ColumnChart.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Rainfall'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      title: {
        text: 'Rainfall (mm)'
      }
    },
    series: [
      {
        name: 'Rainfall',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
