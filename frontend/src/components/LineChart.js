import React from "react";
import Chart from "react-google-charts";
const auxiliars = require("../helpers/auxiliars");
const { rentability } = auxiliars;

const setLineChart = (objectRentability) => {
  let rentabilityFormatted = [];

  rentabilityFormatted.push(Object.keys(objectRentability[0]));
  for (let i = 0; i < objectRentability.length; i++) {
    rentabilityFormatted.push([
      objectRentability[i].Data,
      parseFloat(objectRentability[i]["NCH Maracanã FIA"]),
      parseFloat(objectRentability[i].IBX100),
    ]);
  }
  return rentabilityFormatted;
};

const LineChart = () => {
  return (
    <div>
      <Chart
        width={"800px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>NCH Capital</div>}
        data={setLineChart(rentability)}
        options={{
          series: {
            1: { curveType: "function" },
          },
          title: "Rentabilidade",
        }}
      />
    </div>
  );
};

export default LineChart;
