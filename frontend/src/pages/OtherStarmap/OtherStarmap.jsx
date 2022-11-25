import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import OtherOverlay from "@components/OtherOverlay/OtherOverlay";
import RedAlert from "@components/Redalert";
import "./style.css";

export default function OtherStarmap() {
  return (
    <>
      <Header />
      <RedAlert />
      <OtherOverlay className="main" />
      <Footer />
    </>
  );
}
