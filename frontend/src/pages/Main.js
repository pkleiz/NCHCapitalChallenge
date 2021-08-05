import React from "react";
import AreaChart from "../components/AreaChart";
import LineChart from "../components/LineChart";
import TreeMapChart from "../components/TreeMapChart";
import DonutChart from "../components/DonutChart";
import GlobalStyle from "../components/GlobalStyle";

const Main = () => {
  return (
    <div>
      <div>
        <LineChart />
        <TreeMapChart />
        <AreaChart />
        <DonutChart />
      </div>
    </div>
  );
};

export default Main;
