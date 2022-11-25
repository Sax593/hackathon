import OtherSystem from "@components/OtherSystem/OtherSystem";
import NavbarStarmap from "@components/NavbarStarmap/NavbarStarmap";
import "./style.css";

export default function OtherOverlay() {
  return (
    <div className="overlay">
      <OtherSystem className="starmap" />
      <NavbarStarmap className="navstarmap" />
    </div>
  );
}
