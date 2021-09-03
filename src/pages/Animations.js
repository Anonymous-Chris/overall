import React, { useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import RGL, { Responsive, WidthProvider } from "react-grid-layout";
const originalLayout = getFromLS("layout") || [];

function Animations() {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layout, setLayout] = useState(
    JSON.parse(JSON.stringify(originalLayout))
  );

  const onLayoutChange = (layout) => {
    saveToLS("layout", layout);
  };
  return (
    <div className="text-center m-auto">
      {/* <input
        type="number"
        step="1"
        min="3"
        max="12"
        value={columns}
        onChange={(evt) => setColumns(Number(evt.target.value))}
      /> */}
      <ResponsiveGridLayout
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        autoSize={false}
        rowHeight={70}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        layouts={{ lg: layout, md: layout, sm: layout, xs: layout }}
        containerPadding={[15, 15]}
        margin={[5, 5]}
        isDraggable={true}
        isResizable={true}
        compactType={null}
        useCSSTransforms={true}
        preventCollision={true}
        onLayoutChange={onLayoutChange}
      >
        <div
          key="0"
          data-grid={{ h: 1, w: 2, x: 0, y: 0, moved: false, static: false }}
          style={{ border: "2px solid black" }}
        >
          Expand Me!
        </div>
        <div
          key="1"
          data-grid={{ h: 1, w: 1, x: 2, y: 0, moved: false, static: false }}
          style={{ border: "2px solid black" }}
        >
          Do whatever!
        </div>
        <div
          key="2"
          data-grid={{ h: 2, w: 1, x: 2, y: 1, moved: false, static: false }}
          style={{ border: "2px solid black" }}
        >
          Resize me!
        </div>
        <div
          key="3"
          data-grid={{ h: 2, w: 1, x: 0, y: 1, moved: false, static: false }}
          style={{ border: "2px solid black" }}
        >
          Drag me!
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

export default Animations;
