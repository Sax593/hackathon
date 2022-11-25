import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import SpaceWeather from "@pages/SpaceWeather/SpaceWeather";
import Starmap from "@pages/Starmap/Starmap";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starmap" element={<Starmap />} />
            {/* <Route path="/news" element={a} />
            <Route path="/bookAFlight" element={a} /> */}
            <Route path="/spaceWeather" element={<SpaceWeather />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
