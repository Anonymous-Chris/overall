import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./pages/Home";
import Responsive2X2 from "./pages/Responsive2X2";
import Features from "./pages/Features";
import Animations from "./pages/Animations";
import Surveillance from "./pages/Surveillance";

import CommonTable from "./components/CommonTable";
import NestedDonuts from "./components/features/NestedDonuts";
import Loader from "./components/features/Loader";
import Dropdowns from "./components/features/Dropdowns";
import Datepicker from "./components/features/Datepicker";
import Live from "./components/features/Live";
import Flickity from "./components/features/Flickity";
import Pagination from "./components/features/Pagination";
import Heatmaps from "./components/features/Heatmaps";
import Charts from "./components/features/Charts";
import ThreeD from "./components/ThreeD";
import LazyLoading from "./components/features/lazyloading/LazyLoading";
import FloorHeatmap from "./components/features/surveillance/FloorHeatmap";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/overall" render={() => <Home />} />

            <Route
              exact
              path="/responsive2x2"
              render={() => <Responsive2X2 />}
            />

            <Route exact path="/surveillance" render={() => <Surveillance />} />
            <Route exact path="/surveillance" render={() => <Surveillance />} />

            <Route
              exact
              path="/surveillance/floorheatmap"
              render={() => <FloorHeatmap />}
            />
            <Route exact path="/features" render={() => <Features />} />
            <Route
              exact
              path="/features/dynamictable"
              render={() => <CommonTable />}
            />
            <Route
              exact
              path="/features/autoscroll"
              render={() => <CommonTable />}
            />
            <Route
              exact
              path="/features/nesteddonut"
              render={() => <NestedDonuts />}
            />
            <Route
              exact
              path="/features/loader"
              render={() => <Loader loading={true} />}
            />
            <Route
              exact
              path="/features/dropdowns"
              render={() => <Dropdowns />}
            />
            <Route
              exact
              path="/features/datepicker"
              render={() => <Datepicker />}
            />
            <Route exact path="/features/live" render={() => <Live />} />
            <Route
              exact
              path="/features/flickity"
              render={() => <Flickity />}
            />
            <Route
              exact
              path="/features/pagination"
              render={() => <Pagination />}
            />

            <Route exact path="/animations" render={() => <Animations />} />
            <Route
              exact
              path="/animations/heatmap"
              render={() => <Heatmaps />}
            />
            <Route exact path="/animations/charts" render={() => <Charts />} />
            <Route exact path="/animations/3d" render={() => <ThreeD />} />
            <Route
              exact
              path="/animations/lazyloading"
              render={() => <LazyLoading />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
