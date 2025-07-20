import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";
import CalendarPage from "./pages/CalendarPage";
import MapPage from "./pages/MapPage";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  return (
    <Router>
      <div className="container">
        <header>
          <h1>Travel Assistant</h1>
          <p>Explore our features to make your journey more convenient.</p>
        </header>

        {/* Top navigation bar */}
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/weather" className="nav-link">Weather</Link>
          <Link to="/currency-converter" className="nav-link">Currency</Link>
          <Link to="/calendar" className="nav-link">Calendar</Link>
          <Link to="/map" className="nav-link">Map</Link>
        </nav>

        {/* Main content area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/currency-converter" element={<CurrencyConverterPage />} />
            <Route path="/calendar" element={<CalendarPage events={events} setEvents={setEvents} />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Home page component
const Home = () => (
  <div>
    <h2>Welcome to the International Travel Assistant!</h2>
    <p>Please select a feature above to get started.</p>
  </div>
);

export default App;
