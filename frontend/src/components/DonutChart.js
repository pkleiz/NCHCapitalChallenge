import React from "react";
import Chart from "react-google-charts";
const auxiliars = require("../helpers/auxiliars");
const { wallet } = auxiliars;

const setDonutChart = (objectWallet) => {
  let walletFormatted = [];
  let walletKeys = Object.keys(objectWallet[0]);
  let walletWithoutRepetiton = [];
  let sortedWallet = objectWallet.sort(function (a, b) {
    if (a.Setor < b.Setor) {
      return -1;
    }
    if (a.Setor > b.Setor) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < sortedWallet.length; i++) {
    if (sortedWallet[i + 1]) {
      if (sortedWallet[i].Setor !== sortedWallet[i + 1].Setor) {
        walletWithoutRepetiton.push(sortedWallet[i]);
      }
    }
  }
  walletFormatted.push([walletKeys[1], walletKeys[2]]);
  for (let i = 0; i < walletWithoutRepetiton.length; i++) {
    walletFormatted.push([
      walletWithoutRepetiton[i].Setor,
      parseFloat(walletWithoutRepetiton[i]["% NAV"]),
    ]);
  }
  return walletFormatted;
};

console.log(setDonutChart(wallet));

const DonutChart = () => {
  return (
    <div>
      <Chart
        width={"600px"}
        height={"500px"}
        chartType="PieChart"
        loader={<div>NCH Capital</div>}
        data={setDonutChart(wallet)}
        options={{
          title: "%PL da Carteira",
          // Just add this option
          pieHole: 0.4,
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default DonutChart;
