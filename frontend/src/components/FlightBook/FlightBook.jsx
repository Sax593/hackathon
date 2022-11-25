import "./style.css";

export default function FlightBook() {
  return (
    <div className="ContainerFlightBooking">
      <div className="SelectDestination">
        <h1 className="TitleDestination">Select your destination</h1>
      </div>
      <div className="ListDestination">
        <figure>
          <label htmlFor="1">
            <input type="checkbox" />
          </label>
          <figcaption>Coruscant</figcaption>
        </figure>
        <figure>
          <label htmlFor="2">
            <input type="checkbox" />
          </label>
          <figcaption>Cybertron</figcaption>
        </figure>
        <figure>
          <label htmlFor="3">
            <input type="checkbox" />
          </label>
          <figcaption>Dead Star</figcaption>
        </figure>
        <figure>
          <label htmlFor="4">
            <input type="checkbox" />
          </label>
          <figcaption>Gargantua</figcaption>
        </figure>
        <figure>
          <label htmlFor="5">
            <input type="checkbox" />
          </label>
          <figcaption>Krypton</figcaption>
        </figure>
        <figure>
          <label htmlFor="6">
            <input type="checkbox" />
          </label>
          <figcaption>Mars</figcaption>
        </figure>
        <figure>
          <label htmlFor="7">
            <input type="checkbox" />
          </label>
          <figcaption>Orion</figcaption>
        </figure>
      </div>
      <div className="SelectDates">
        <h1 className="TitleDates">Select your travel dates</h1>
      </div>
      <div className="ButtonDates">
        <figure>
          <label htmlFor="datedeparture">
            Date of departure :
            <input type="date" id="departure" />
          </label>
        </figure>
        <figure>
          <label htmlFor="datereturn">
            Date of return :
            <input type="date" id="return" />
          </label>
        </figure>
      </div>
      <div className="SelectMeans">
        <h1 className="TitleMeans">Select your means of transport</h1>
      </div>
      <div className="ListMeans">
        <figure>
          <label htmlFor="space1">
            <input type="checkbox" />
          </label>
          <figcaption>Space 1</figcaption>
        </figure>
        <figure>
          <label htmlFor="space2">
            <input type="checkbox" />
          </label>
          <figcaption>Space 2</figcaption>
        </figure>
        <figure>
          <label htmlFor="space3">
            <input type="checkbox" />
          </label>
          <figcaption>Space 3</figcaption>
        </figure>
        <figure>
          <label htmlFor="space4">
            <input type="checkbox" />
          </label>
          <figcaption>Space 4</figcaption>
        </figure>
        <figure>
          <label htmlFor="space5">
            <input type="checkbox" />
          </label>
          <figcaption>Space 5</figcaption>
        </figure>
      </div>
      <div className="ViewPrice">
        <button type="button" className="price-button">
          VIEW PRICE
        </button>
      </div>
    </div>
  );
}
