import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";

function Animations() {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  // const [columns, setColumns] = React.useState(3);
  const columns = 3;
  const layout = [
    { i: "0", h: 1, w: 2, x: 0, y: 0, moved: false, static: false },
    { i: "1", h: 1, w: 1, x: 2, y: 0, moved: false, static: false },
    { i: "2", h: 2, w: 1, x: 2, y: 1, moved: false, static: false },
    { i: "3", h: 2, w: 1, x: 0, y: 1, moved: false, static: false },
  ];
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
      >
        <div key={"0"} style={{ border: "2px solid black" }}>
          Expand Me!
        </div>
        <div key={"1"} style={{ border: "2px solid black" }}>
          Do whatever!
        </div>
        <div key={"2"} style={{ border: "2px solid black" }}>
          Resize me!
        </div>
        <div key={"3"} style={{ border: "2px solid black" }}>
          Drag me!
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default Animations;
