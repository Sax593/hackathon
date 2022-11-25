import SolarSystem from "@components/SolarSystem/SolarSystem";
import NavbarStarmap from "@components/NavbarStarmap/NavbarStarmap";
import "./style.css";

export default function OtherOverlay() {
  return (
    <div className="overlay">
      <SolarSystem className="starmap" />
      <NavbarStarmap className="navstarmap" />
    </div>
  );
}
