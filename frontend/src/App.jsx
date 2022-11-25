import "./reset.css";
import "./App.css";



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
            <Route path="/starmap/othersystem" element={<OtherStarmap />} />
            <Route path="/spaceWeather" element={<SpaceWeather />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/bookAFlight" element={a} /> 
            <Route path="/bookAFlight" element={a} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
