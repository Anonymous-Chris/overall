import React, { useEffect } from "react";
import Chart from "chart.js";

const Bar = (props) => {
    // console.log(props.data)

useEffect(() => {

    Chart.helpers.each(Chart.instances, function (instance) {
      if (instance.chart.canvas.id === "bar_bar") {
        instance.destroy();
        return;
      }
      const ctx = document.getElementById("bar_bar").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels:props.labels,
          datasets: []
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
            position:'bottom',
            fontColor: "white",
            fontFamily: "'Roboto Condensed', sans-serif",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6
                },
              },
            ],
          },
        },
      });
    });
  },[props]);

  return (
    <React.Fragment>
      <div className="canvas" style={{ height: "inherit", width: " inherit" }}>
        <canvas id="bar_bar" />
      </div>
    </React.Fragment>
  );
};

export default Bar;
