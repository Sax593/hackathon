import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import Overlay from "@components/Overlay/Overlay";
import RedAlert from "@components/Redalert";
import "./style.css";

export default function Starmap() {
  return (
    <>
      <Header />
      <RedAlert />
      <Overlay className="main" />
      <Footer />
    </>
  );
}
