// App.js
import React from "react";
import LineChart from "./components/LineChart";
import ColumnChart from "./components/ColumnChart";
import PieChart from "./components/PieChart";
import AreaChart from "./components/AreaChart";
import ScatterPlot from "./components/ScatterPlot";

function App() {
  return (
    <div>
      <h1>Highcharts in React</h1>
      <LineChart />
      <ColumnChart />
      <PieChart />
      <AreaChart />
      <ScatterPlot />
    </div>
  );
}

export default App;
