import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./services/reset.css";
import "./App.css";

import Home from "./pages/Home/Home";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            {/* <Route path="/starMap" element={a} /> */}
            {/* <Route path="/bookAFlight" element={a} /> */}
            {/* <Route path="/spaceWeather" element={a} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
