import { Link } from "react-router-dom";

export default function NavbarStarmap() {
  return (
    <ul className="navStarmap">
      <Link to="/starmap/solarsystem">
        <li>Solar system</li>
      </Link>
      <Link to="/starmap/stantonsystem">
        <li>Stanton system</li>
      </Link>
      <Link to="/starmap/othersystem">
        <li>Other destination</li>
      </Link>
    </ul>
  );
}
