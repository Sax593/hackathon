import "./reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

// import Home from "./pages/Home/Home";
import Starmap from "@pages/Starmap/Starmap";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/starmap" element={<Starmap />} />
            {/* <Route path="/news" element={a} />
            <Route path="/bookAFlight" element={a} />
            <Route path="/spaceWeather" element={a} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
