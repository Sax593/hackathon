/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import "./navBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navigation">
      <ul className="nav">
        <NavLink to="/" className="nav-links">
          <li className="nav-list">Home</li>
        </NavLink>
        <NavLink to="/news" className="nav-links">
          <li className="nav-list">News</li>
        </NavLink>
        <NavLink to="/starMap" className="nav-links">
          <li className="nav-list">StarMap</li>
        </NavLink>
        <NavLink to="/bookAFlight" className="nav-links">
          <li className="nav-list">Book a flight</li>
        </NavLink>
        <NavLink to="/spaceWeather" className="nav-links">
          <li className="nav-list">Space Weather</li>
        </NavLink>
      </ul>
    </div>
  );
}

