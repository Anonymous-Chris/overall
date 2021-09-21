import React, { useEffect } from "react";
import Chart from "chart.js";

const Donut = () => {
  const data = [10, 30, 50, 10];
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
        labels: ["a",'b','c','d'],
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            pointStyle: "circle",
            backgroundColor: ["red", "green", "blue", "white"],
            hoverBackgroundColor: ["red", "green", "blue", "white"],
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
      },
    });
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <div className="canvas" style={{height: 'inherit', width: ' inherit'}}>
        <canvas id="pie_pie" />
      </div>
    </React.Fragment>
  );
};

export default Donut;
