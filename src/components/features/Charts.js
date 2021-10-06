import React from "react";
import Bar1 from "../graphs/recharts/line/Rechartsbar";
import Bar2 from "../graphs/recharts/line/Rechartsbar_customizeddot";
import CustomPieChart from "../graphs/recharts/piechart/Piechart_custom_label";
import PieChartPopup from "../graphs/recharts/piechart/Piechart_popup";
import PieChart from "../graphs/recharts/piechart/Piecharts";
import Scatterplot from "../graphs/recharts/scatterplot/Scatterplot";
import RadarChart from "../graphs/recharts/radar/RadarChart";
const Charts = () => {
  return (
    <div
      className="charts w-100 h-100 text-white text-center"
      style={{ background: "#161619" }}
    >
      <h5>Charts</h5>
      <div
        className="row m-0 p-0 w-100 h-100"
        style={{ background: "#161619", overflow: "scroll" }}
      >
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1 "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          {" "}
          <Bar1 />{" "}
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1 "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          {" "}
          <Bar2 />{" "}
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1  "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          <Scatterplot />{" "}
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1 "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          <RadarChart />
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1 "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          <PieChart />{" "}
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1 "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          <PieChartPopup />
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 p-1 "
          style={{ border: "1px solid orange", background: "#212224" }}
        >
          <CustomPieChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
