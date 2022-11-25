import DisplayHome from "@components/DisplayHome/DisplayHome";
// import Header from "@components/Header/Header";
// import PlanetCard from "@components/PlanetCard";
// import RedAlert from "@components/Redalert";
import Booking from "@components/Booking/Booking";
import Departure from "@components/departure";
import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import RedAlert from "@components/Redalert";
import "./style.css";

export default function Home() {
  return (
    <div className="background">
      <div className="fade-out">
        <DisplayHome />
      </div>
      <div className="fade-in">
        <Header />
        <div className="main">
          <RedAlert />
          <Departure />
        </div>
        <Booking />
        <Footer />
      </div>
    </div>
  );
}
