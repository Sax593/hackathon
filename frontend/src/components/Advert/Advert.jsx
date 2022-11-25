import "./style.css";
import spaceship from "@assets/advertimg.png";

export default function Advert() {
  return (
    <div className="advert">
      <p className="AdvertTitleTop">Come and try our new acquisiton</p>
      <img src={spaceship} alt="Spaceship" />
      <p className="AdvertTitleBottom">Show more</p>
    </div>
  );
}
