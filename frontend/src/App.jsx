import "./reset.css";
import "./App.css";
import NewsPage from "@pages/NewsPage/NewsPage";
import SpaceWeather from "@pages/SpaceWeather/SpaceWeather";
import OtherStarmap from "@pages/OtherStarmap/OtherStarmap";
import StantonStarmap from "@pages/StantonStarmap/StantonStarmap";
import SolarStarmap from "@pages/SolarStarmap/SolarStarmap";
import Home from "@pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starmap" element={<SolarStarmap />} />
          <Route path="/starmap/solarsystem" element={<SolarStarmap />} />
          <Route path="/starmap/stantonsystem" element={<StantonStarmap />} />
          <Route path="/starmap/othersystem" element={<OtherStarmap />} />
          <Route path="/spaceWeather" element={<SpaceWeather />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/flightbook" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
