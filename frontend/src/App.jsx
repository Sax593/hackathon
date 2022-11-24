import "./reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import SolarStarmap from "@pages/SolarStarmap/SolarStarmap";
import StantonStarmap from "@pages/StantonStarmap/StantonStarmap";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Routes>
            <Route path="/starmap" element={<SolarStarmap />} />
            <Route path="/starmap/solarsystem" element={<SolarStarmap />} />
            <Route path="/starmap/stantonsystem" element={<StantonStarmap />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
