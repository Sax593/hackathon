import "./style.css";
import blackhole from "@assets/blackhole1.jpg";

export default function PlanetCard() {
  return (
    <div className="pCard">
      <div className="ptitle">
        <img className="imgplanet" src={blackhole} alt="Gargantua" />
        <div>
          <h1>Gargantua</h1>
          <br />
          <h3>Black Hole</h3>
          <p>"?????????????????"</p>
        </div>
      </div>
      <h1>Next Departures:</h1>
      <br />
      <p>ùpfiàl kpoe$&k$x;p$</p>
      <p>cjf^kxal:;;;;k $</p>
      <br />
      <p className="gAlert">No data: please consider your customer!</p>
    </div>
  );
}
