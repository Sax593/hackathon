import StantonSystem from "@components/StantonSystem/StantonSystem";
import NavbarStarmap from "@components/NavbarStarmap/NavbarStarmap";
import "./style.css";

export default function StantonOverlay() {
  return (
    <div className="overlay">
      <StantonSystem className="starmap" />
      <NavbarStarmap className="navstarmap" />
    </div>
  );
}
