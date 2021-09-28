import React, { useState, Suspense, useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../css/surveillance.css";
import Logs from "../components/features/surveillance/Logs";
import Heatmaps from "../components/features/surveillance/Heatmaps";
import OverallPeople from "../components/features/surveillance/OverallPeople";
// import Video from "../components/features/surveillance/Video";
// import VideoLandingPage from "../components/features/surveillance/VideoLandingPage";
const VideoLandingPage = React.lazy(() =>
  import("../components/features/surveillance/VideoLandingPage")
);
import Detection from "../components/features/surveillance/Detection";
// import Testing from "../components/features/testing/CheckContextApI";
// import GetData from "../components/features/testing/GetDataTest";
const originalLayout = getFromLS("layouts") || {};

function Surveillance() {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layouts] = useState(JSON.parse(JSON.stringify(originalLayout)));

  useEffect(() => {
    // localStorage.removeItem("rgl-8");
  }, []);

  const onLayoutChange = (layout, layouts) => {
    console.log(layout, layouts);
    // change layouts for xs and xss screens
    if (layouts?.xs?.length > 0) {
      layouts.xs[3].h = 16;
      layouts.xs[4].h = 3;
    }

    if (layouts?.xxs?.length > 0) {
      layouts.xxs[3].h = 16;
      layouts.xxs[4].h = 3;
    }
    saveToLS("layouts", layouts);
  };
  return (
    <div className="text-center w-100 h-100" style={{ background: " black" }}>
      {/* <input
        type="number"
        step="1"
        min="3"
        max="12"
        value={columns}
        onChange={(evt) => setColumns(Number(evt.target.value))}
      /> */}
      <ResponsiveGridLayout
        rowHeight={70}
        cols={{ lg: 12, md: 6, sm: 6, xs: 4, xxs: 4 }}
        layouts={layouts}
        margin={[5, 5]}
        isDraggable={true}
        isResizable={true}
        isDroppable={true}
        resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
        onLayoutChange={onLayoutChange}
      >
        <div
          key="0"
          data-grid={{ h: 4, w: 4, x: 0, y: 0, moved: false, static: false }}
          style={{
            border: "2px solid black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <Logs />
        </div>
        <div
          key="1"
          data-grid={{ w: 4, h: 4, x: 0, y: 8, moved: false, static: false }}
          style={{
            border: "2px solid black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <Heatmaps />
        </div>
        <div
          key="2"
          data-grid={{ w: 4, h: 4, x: 0, y: 4, moved: false, static: false }}
          style={{
            border: "2px solid black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <OverallPeople />
        </div>
        <div
          key="3"
          data-grid={{ w: 8, h: 8, x: 4, y: 0, moved: false, static: false }}
          style={{
            border: "2px solid black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <VideoLandingPage />
          </Suspense>{" "}
        </div>
        <div
          key="4"
          data-grid={{ w: 8, h: 4, x: 4, y: 8, moved: false, static: false }}
          style={{
            border: "2px solid black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <Detection />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

export default Surveillance;
