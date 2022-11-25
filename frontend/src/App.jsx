// import ModalPrice from "./components/ModalPrice/ModalPrice";
import "./reset.css";
import "./App.css";
import FlightBook from "@components/FlightBook/FlightBook";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "@pages/Home/Home";
// import FlightBook from "@components/FlightBook/FlightBook";

function App() {
  return (
    <div className="App">
      <FlightBook />
      {/* <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={a} />
            <Route path="/starMap" element={a} />
            <Route path="/bookAFlight" element={a} />
            <Route path="/spaceWeather" element={a} />
          </Routes>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
