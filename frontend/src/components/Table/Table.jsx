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
    <div className="mainContainer">
      <h1 className="titleTable">Space Weather</h1>
      <ul className="risk">
        <li className="riskLow bulletGreen">Risk low</li>
        <li className="riskMiddle bulletOrange">Risk middle</li>
        <li className="riskHight bulletRed">Risk hight</li>
      </ul>
      <div className="container">
        <div className="planets">
          <h2 className="titleColumn">Planets</h2>
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
          <h2 className="titleColumn">Solar Flare</h2>
          <ul>
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletRed" />
            <li className="bulletGreen" />
            <li className="bulletRed" />
            <li className="bulletGreen" />
          </ul>
        </div>
        <div className="supernova">
          <h2 className="titleColumn">Super Nova</h2>
          <ul>
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletRed" />
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletGreen" />
          </ul>
        </div>
        <div className="asteroidImpact">
          <h2 className="titleColumn">Astéroïd Impact</h2>
          <ul>
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletGreen" />
            <li className="bulletRed" />
            <li className="bulletOrange" />
            <li className="bulletGreen" />
            <li className="bulletGreen" />
          </ul>
        </div>
        <div className="flight">
          <h2 className="titleColumn">Flight</h2>
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
    </div>
  );
}
