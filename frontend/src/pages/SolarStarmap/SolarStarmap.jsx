import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import SolarOverlay from "@components/SolarOverlay/SolarOverlay";
import RedAlert from "@components/Redalert";
import "./style.css";

export default function Starmap() {
  return (
    <>
      <Header />
      <RedAlert />
      <SolarOverlay className="main" />
      <Footer />
    </>
  );
}
