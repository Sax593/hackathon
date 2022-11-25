import "./style.css";
import data from "@assets/raw.json";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function PlanetCard({ id }) {
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    const planets = data.filter((d) => {
      return d.planet_id === id;
    })[0];
    setPlanet(planets);
  }, []);
  return (
    <div className="pCard">
      {planet && (
        <>
          <div className="ptitle">
            <img
              className="imgplanet"
              src={`/src/assets/${planet.planet_poster}`}
              alt={planet.planet_name}
            />
            <div>
              <h1>{planet.planet_name}</h1>
              <br />
              <h3>{planet.planet_title}</h3>
              <p>{planet.planet_desc}</p>
            </div>
          </div>
          <h1>Next Departures:</h1>
          <br />
          <p>ùpfiàl kpoe$&k$x;p$</p>
          <p>cjf^kxal:;;;;k $</p>
          <br />
          <p className="gAlert">No data: please consider your customer!</p>
        </>
      )}
    </div>
  );
}

PlanetCard.propTypes = {
  id: PropTypes.number.isRequired,
};
