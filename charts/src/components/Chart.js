import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

function Chart({ data, chartType }) {
  const chartLabel = data.map((state) => state.state);
  const chartData = data.map((state) => state.total);

  const displayChartType = () => {
    switch (chartType) {
      case "bar":
        return (
          <Bar
            data={{
              labels: chartLabel,
              datasets: [
                {
                  label: "Total Cases",
                  data: chartData,
                  backgroundColor: "rgba(0, 132, 255)",
                },
              ],
            }}
            options={{ maintainAspectRatio: true, legend: false }}
          />
        );
      case "line":
        return (
          <Line
            data={{
              labels: chartLabel,
              datasets: [
                {
                  label: "Total Cases",
                  data: chartData,
                },
              ],
            }}
            options={{ maintainAspectRatio: true, legend: false }}
          />
        );
      case "doughnut":
        return (
          <Doughnut
            data={{
              labels: chartLabel,
              datasets: [
                {
                  label: "Total Cases",
                  data: chartData,
                  backgroundColor: "rgba(0, 132, 255)",
                },
              ],
            }}
            options={{
              maintainAspectRatio: true,
              legend: false,
              cutoutPercentage: 20,
            }}
          />
        );
      default:
        return null;
    }
  };

  return displayChartType(chartType);
}

export default Chart;
