
import Header from "@components/Header/Header";
import DisplayHome from "@components/DisplayHome/DisplayHome";
import Departure from "@components/departure";
import Footer from "@components/Footer";
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
      
        <Footer />
      </div>
    </div>
  );
}
