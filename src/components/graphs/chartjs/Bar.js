import React, { useEffect } from "react";
import Chart from "chart.js";

const Bar = (props) => {
  // console.log(props.data)

  useEffect(() => {
    const filteredData = [];
    // converting to the format the data is required
    props.data?.map((item) => {
      const obj = {};
      obj["label"] = item.label;
      obj["backgroundColor"] = item.backgroundColor;
      obj["data"] = item.data;
      filteredData.push(obj);
    });
    console.log(typeof props.data);
    Chart.helpers.each(Chart.instances, function (instance) {
      if (instance.chart.canvas.id === "bar_bar") {
        instance.destroy();
        return;
      }
      const ctx = document.getElementById("bar_bar").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: props.labels,
          datasets: filteredData,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          showAllTooltips: true,

          legend: {
            display: true,
            position: "top",
            labels: {
              usePointStyle: true,
              fontColor: "white",
            },
          },
          title: {
            display: true,
            text: props.title,
            position: "bottom",
            fontColor: "white",
            fontFamily: "'Roboto Condensed', sans-serif",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                },
              },
            ],
          },
        },
      });
    });
  }, [props]);

  return (
    <React.Fragment>
      <div className="canvas" style={{ height: "inherit", width: " inherit" }}>
        <canvas id="bar_bar" />
      </div>
    </React.Fragment>
  );
};

export default Bar;
