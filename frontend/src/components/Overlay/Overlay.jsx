import Map from "@components/Map/Map";
import NavbarStarmap from "@components/NavbarStarmap/NavbarStarmap";
import "./style.css";

export default function Overlay() {
  return (
    <div className="overlay">
      <Map className="map" />
      <NavbarStarmap className="navstarmap" />
    </div>
  );
}
