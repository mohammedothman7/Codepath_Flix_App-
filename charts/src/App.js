import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Chart from "./components/Chart";

function App() {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("bar");

  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v1/states/current.json")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChartType = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="App">
      <h1>Covid-19 Total Cases by State</h1>
      <select value={chartType} onChange={handleChartType}>
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="doughnut">Doughnut</option>
      </select>
      <Chart data={data} chartType={chartType} />
    </div>
  );
}

export default App;
