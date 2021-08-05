import React from "react";
import Chart from "react-google-charts";
import styled from "styled-components";

const auxiliars = require("../helpers/auxiliars");
const { drawDown } = auxiliars;

const setAreaChart = (objectDrawDown) => {
  let drawDownFormatted = [];

  drawDownFormatted.push(Object.keys(objectDrawDown[0]));
  for (let i = 0; i < objectDrawDown.length; i++) {
    drawDownFormatted.push([
      objectDrawDown[i].Data,
      parseFloat(objectDrawDown[i]["DrawDown FIA"]),
      parseFloat(objectDrawDown[i]["DrawDown Ibovespa"]),
    ]);
  }
  return drawDownFormatted;
};

const AreaChart = () => {
  return (
    <div>
      <Chart
        width={"600px"}
        height={"300px"}
        chartType="AreaChart"
        loader={<div>NCH Capital</div>}
        data={setAreaChart(drawDown)}
        options={{
          title: "Max DrawDown",
          hAxis: { titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: "50%", height: "70%" },
          // lineWidth: 25
        }}
      />
    </div>
  );
};

export default AreaChart;
