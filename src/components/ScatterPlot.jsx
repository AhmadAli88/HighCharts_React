// ScatterPlot.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ScatterPlot = () => {
  const options = {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Height vs Weight of 500 Individuals'
    },
    xAxis: {
      title: {
        text: 'Height (cm)'
      }
    },
    yAxis: {
      title: {
        text: 'Weight (kg)'
      }
    },
    series: [
      {
        name: 'Individuals',
        data: [
          [167, 60], [170, 65], [175, 70], [160, 50], [180, 80], [190, 90], [200, 100]
        ]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ScatterPlot;
