import React, { useEffect } from "react";
import Chart from "chart.js";

const Donut = (props) => {
  useEffect(() => {
    const data = props.data;
    // console.log(data);

    const detectedData = data?.map((item) => item.detected);
    const labels = data?.map((item) => item.name);
    const backgroundColor = ["red", "green", "blue", "white", "pink", "yellow"];
    // console.log(detectedData, labels);

    Chart.helpers.each(Chart.instances, function (instance) {
      if (instance.chart.canvas.id === "pie_pie") {
        instance.destroy();
        return;
      }
    });

    const ctx = document.getElementById("pie_pie").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: detectedData,
            pointStyle: "circle",
            backgroundColor: backgroundColor,
            hoverBackgroundColor: [
              "red",
              "green",
              "blue",
              "white",
              "pink",
              "yellow",
            ],
            hoverOffset: 4,
            borderWidth: 0,
            datalabels: {
              color: "white",
              align: "center",
              font: {
                size: "16",
              },
            },
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        showAllTooltips: true,
        responsive: true,

        legend: {
          display: true,
          position: "bottom",
          labels: {
            usePointStyle: true,
            fontColor: "white",
          },
        },
        title: {
          display: true,
          text: props?.title || "Detected People",
          position: "top",
          fontColor: "white",
          fontFamily: "'Roboto Condensed', sans-serif",
        },
      },
    });
  }, [props]);
  // console.log(data);
  return (
    <React.Fragment>
      <div className="canvas" style={{ height: "inherit", width: " inherit" }}>
        <canvas id="pie_pie" />
      </div>
    </React.Fragment>
  );
};

export default Donut;
