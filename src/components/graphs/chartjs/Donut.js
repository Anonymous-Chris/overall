import React, { useEffect } from "react";
import Chart from "chart.js";

const Donut = (props) => {
  const data = [10, 30, 36, 10, 5, 9];
  useEffect(() => {
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
        labels: [
          "Camera1-Test",
          "Camera2-Test",
          "Camera3-Test",
          "Camera4-Testd",
          "Camera5-Test",
          "Camera6-Test",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            pointStyle: "circle",
            backgroundColor: [
              "red",
              "green",
              "blue",
              "white",
              "pink",
              "yellow",
            ],
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
          text: props?.title || 'Detected People',
          position: "top",
          fontColor: "white",
          fontFamily: "'Roboto Condensed', sans-serif",
        },
      },
    });
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <div className="canvas" style={{ height: "inherit", width: " inherit" }}>
        <canvas id="pie_pie" />
      </div>
    </React.Fragment>
  );
};

export default Donut;
