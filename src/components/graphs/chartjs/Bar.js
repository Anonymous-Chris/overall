import React, { useEffect } from "react";
import Chart from "chart.js";

const Bar = () => {
  const data1 = [10, 5, 7, 9, 4, 9, 10, 5, 7, 9, 4, 9];
  const data2 = [7, 1, 3, 5, 5, 4, 10, 5, 6, 9, 4, 0];
  const data3 = [10, 5, 7, 9, 4, 9, 0, 2, 5, 5, 2, 0];
  const data4 = [7, 1, 3, 2, 5, 4, 3, 1, 7, 9, 4, 9];
  const data5 = [0, 1, 0, 5, 5, 4, 2, 3, 8, 7, 1, 8];
  const data6 = [1, 5, 0, 9, 0, 9, 5, 4, 7, 0, 0, 9];

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
          labels: [
            "Time1-Test",
            "Time2-Test",
            "Time3-Test",
            "Time4-Testd",
            "Time5-Test",
            "Time6-Test",
            "Time7-Test",
            "Time8-Test",
            "Time9-Test",
            "Time10-Test",
            "Time11-Test",
            "Time12-Test",
          ],
          datasets: [
            {
              label: "camera1",
              backgroundColor: "green",
              data: data1,
            },
            {
              label: "camera2",
              backgroundColor: "blue",
              data: data2,
            },
            {
              label: "camera3",
              backgroundColor: "rgb(0, 197, 106)",
              data: data3,
            },
            {
              label: "camera4",
              backgroundColor: "rgb(255, 114, 107)",
              data: data4,
            },
            {
              label: "camera5",
              backgroundColor: "red",
              data: data5,
            },
            {
              label: "camera6",
              backgroundColor: "white",
              data: data6,
            },
          ],
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
            text: "Custom title to be here",
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
  });

  return (
    <React.Fragment>
      <div className="canvas" style={{ height: "inherit", width: " inherit" }}>
        <canvas id="bar_bar" />
      </div>
    </React.Fragment>
  );
};

export default Bar;
