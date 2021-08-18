import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./pages/Home";
import Responsive2X2 from "./pages/Responsive2X2";
import Features from "./pages/Features";
import Functions from "./pages/Functions";
import CommonTable from "./components/CommonTable";
import Feature2 from "./components/features/feature2";
import Feature3 from "./components/features/feature3";
import Feature4 from "./components/features/feature4";
import Feature5 from "./components/features/feature5";
import Feature6 from "./components/features/feature6";
import Feature7 from "./components/features/feature7";
import Feature8 from "./components/features/feature8";
import Feature9 from "./components/features/feature9";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/responsive2x2"
              render={() => <Responsive2X2 />}
            />
            <Route exact path="/features" render={() => <Features />} />
            <Route
              exact
              path="/features/dynamictable"
              render={() => <CommonTable />}
            />
            <Route exact path="/features/two" render={() => <Feature2 />} />
            <Route exact path="/features/three" render={() => <Feature3 />} />
            <Route exact path="/features/four" render={() => <Feature4 />} />
            <Route exact path="/features/five" render={() => <Feature5 />} />
            <Route exact path="/features/six" render={() => <Feature6 />} />
            <Route exact path="/features/seven" render={() => <Feature7 />} />
            <Route exact path="/features/eight" render={() => <Feature8 />} />
            <Route exact path="/features/nine" render={() => <Feature9 />} />

            <Route exact path="/functions" render={() => <Functions />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
