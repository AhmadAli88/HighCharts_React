// LineChart.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = () => {
  const options = {
    title: {
      text: "Monthly Average Temperature"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    series: [
      {
        name: "Temperature",
        data: [2.9, 7.5, 12.7, 15.3, 18.6, 21.4, 25.0, 23.9, 18.1, 13.2, 7.0, 4.2]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
