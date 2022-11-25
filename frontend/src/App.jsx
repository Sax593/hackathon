import "./reset.css";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import SpaceWeather from "@pages/SpaceWeather/SpaceWeather";
import SolarStarmap from "@pages/SolarStarmap/SolarStarmap";
import StantonStarmap from "@pages/StantonStarmap/StantonStarmap";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starmap" element={<SolarStarmap />} />
            <Route path="/starmap/solarsystem" element={<SolarStarmap />} />
            <Route path="/starmap/stantonsystem" element={<StantonStarmap />} />
            <Route path="/spaceWeather" element={<SpaceWeather />} />
            {/* <Route path="/news" element={a} />
            <Route path="/bookAFlight" element={a} /> 
            <Route path="/bookAFlight" element={a} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
