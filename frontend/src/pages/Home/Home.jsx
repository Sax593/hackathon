import Departure from "@components/departure";
import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import RedAlert from "@components/Redalert";

export default function Home() {
  return (
    <div className="background">
      <Header />
      <div className="main">
        <RedAlert />
        <Departure />
      </div>
      <Footer />
    </div>
  );
}
