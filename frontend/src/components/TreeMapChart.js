import React from "react";
import Chart from "react-google-charts";
const auxiliars = require("../helpers/auxiliars");
const { wallet } = auxiliars;

const setTreeMapChart = (objectWallet) => {
  let walletFormatted = [];
  let walletKeys = Object.keys(objectWallet[0]);
  let walletWithoutRepetiton = [];

  walletFormatted.push([walletKeys[1], "Parent", walletKeys[2], "color"]);
  walletFormatted.push(["Nº de Ações por Setor", null, 0, 0]);

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

  for (let i = 0; i < walletWithoutRepetiton.length; i++) {
    walletFormatted.push([
      walletWithoutRepetiton[i].Setor,
      "Nº de Ações por Setor",
      parseFloat(walletWithoutRepetiton[i]["% NAV"]),
      Math.random() * 100,
    ]);
  }
  return walletFormatted;
};

const TreeMapChart = () => {
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="TreeMap"
        loader={<div>NCH Capital</div>}
        data={setTreeMapChart(wallet)}
        options={{
          minColor: "#B22222",
          midColor: "#ddd",
          maxColor: "#4682B4",
          headerHeight: 15,
          fontColor: "black",
          fontSize: 11,
          showScale: false,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default TreeMapChart;
