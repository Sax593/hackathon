import "./table.css";
import coruscant from "@assets/coruscant.png";
import cybertron from "@assets/cybertron.jpg";
import deathStar from "@assets/deathStar.jpg";
import gargantua from "@assets/gargantua.jpg";
import krypton from "@assets/krypton.jpg";
import mars from "@assets/mars.jpg";
import orion from "@assets/orion.jpg";

export default function Table() {
  return (
    <div className="container">
      <div className="planets">
        <h1 className="titleTable">Planets</h1>
        <ul>
          <li className="planet">
            <img className="imgPlanet" src={deathStar} alt="Death Star" />
            Death Star
          </li>
          <li className="planet">
            <img className="imgPlanet" src={coruscant} alt="Coruscant" />
            Coruscant
          </li>
          <li className="planet">
            <img className="imgPlanet" src={cybertron} alt="Cybertron" />
            Cybertron
          </li>
          <li className="planet">
            <img className="imgPlanet" src={gargantua} alt="Gargantua" />
            Gargantua
          </li>
          <li className="planet">
            <img className="imgPlanet" src={krypton} alt="Krypton" />
            Krypton
          </li>
          <li className="planet">
            <img className="imgPlanet" src={mars} alt="Mars" />
            Mars
          </li>
          <li className="planet">
            <img className="imgPlanet" src={orion} alt="Orion" />
            Orion
          </li>
        </ul>
      </div>
      <div className="solarFlare">
        <h1 className="titleTable">Solar Flare</h1>
        <ul>
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleRed" />
          <li className="cercleGreen" />
          <li className="cercleRed" />
          <li className="cercleGreen" />
        </ul>
      </div>
      <div className="supernova">
        <h1 className="titleTable">Super Nova</h1>
        <ul>
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleRed" />
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleGreen" />
        </ul>
      </div>
      <div className="asteroidImpact">
        <h1 className="titleTable">Astéroïd Impact</h1>
        <ul>
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleGreen" />
          <li className="cercleRed" />
          <li className="cercleOrange" />
          <li className="cercleGreen" />
          <li className="cercleGreen" />
        </ul>
      </div>
      <div className="flight">
        <h1 className="titleTable">Flight</h1>
        <ul>
          <li className="list-flight" data-status="Confirmed" />
          <li className="list-flight" data-status="Confirmed" />
          <li className="list-flight" data-status="Confirmed" />
          <li className="list-flight">hjfdsjkfh</li>
          <li className="list-flight" data-status="Late" />
          <li className="list-flight" data-status="Cancelled" />
          <li className="list-flight" data-status="Confirmed" />
        </ul>
      </div>
    </div>
  );
}
