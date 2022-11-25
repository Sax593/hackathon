
import DisplayHome from "@components/DisplayHome/DisplayHome";
// import Header from "@components/Header/Header";
// import PlanetCard from "@components/PlanetCard";
// import RedAlert from "@components/Redalert";
import Booking from "@components/Booking/Booking";
import Departure from "@components/departure";
import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import RedAlert from "@components/Redalert";


export default function Home() {
  return (
    <div className="background">
    <DisplayHome />
      <Header />
      <div className="main">
        <RedAlert />
        <Departure />
      </div>
      <Booking />
      <Footer />
    </div>
  );
}
