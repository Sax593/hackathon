import StantonSystem from "@components/StantonSystem/StantonSystem";
import NavbarStarmap from "@components/NavbarStarmap/NavbarStarmap";
import "./style.css";

export default function Overlay() {
  return (
    <div className="overlay">
      <StantonSystem className="starmap" />
      <NavbarStarmap className="navstarmap" />
    </div>
  );
}
