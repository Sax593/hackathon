import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import StantonOverlay from "@components/StantonOverlay/StantonOverlay";
import RedAlert from "@components/Redalert";
import "./style.css";

export default function Starmap() {
  return (
    <>
      <Header />
      <RedAlert />
      <StantonOverlay className="main" />
      <Footer />
    </>
  );
}
