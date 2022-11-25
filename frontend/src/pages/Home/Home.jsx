import Header from "@components/Header/Header";
import DisplayHome from "@components/DisplayHome/DisplayHome";
import Departure from "@components/departure";
import Footer from "@components/Footer";
import RedAlert from "@components/Redalert";
import Advert from "@components/Advert/Advert";
import Booking from "@components/Booking/Booking";
import "./style.css";
import Audio from "@components/Audio/Audio";

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
          <Advert />
          <div className="audioPlayer">
            <Audio />
          </div>
          <Booking />
        </div>
        <div className="ShootingStar">
          <section className="SectionShootingStar">
            <span className="SpanShootingStar" />
            <span className="SpanShootingStar" />
            <span className="SpanShootingStar" />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
