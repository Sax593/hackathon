import "./style.css";

export default function FlightBook() {
  return (
    <div className="ContainerFlightBooking">
      <div className="SelectDestination">
        <h1 className="TitleDestination">Select your destination</h1>
      </div>
      <div className="ListDestination">
        <figure className="Wording">
          <label htmlFor="1">
            <input type="checkbox" />
          </label>
          <figcaption>Coruscant</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="2">
            <input type="checkbox" />
          </label>
          <figcaption>Cybertron</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="3">
            <input type="checkbox" />
          </label>
          <figcaption>Dead Star</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="4">
            <input type="checkbox" />
          </label>
          <figcaption>Gargantua</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="5">
            <input type="checkbox" />
          </label>
          <figcaption>Krypton</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="6">
            <input type="checkbox" />
          </label>
          <figcaption>Mars</figcaption>
        </figure>
        <figure className="Wording">
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
        <figure className="Wording">
          <label htmlFor="datedeparture">
            Date of departure :
            <input type="date" id="departure" />
          </label>
        </figure>
        <figure className="Wording">
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
        <figure className="Wording">
          <label htmlFor="space1">
            <input type="checkbox" />
          </label>
          <figcaption>Ad Astra</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="space2">
            <input type="checkbox" />
          </label>
          <figcaption>Zephyr Swift</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="space3">
            <input type="checkbox" />
          </label>
          <figcaption>Destiny of Tribo</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="space4">
            <input type="checkbox" />
          </label>
          <figcaption>Buzz Aldrin</figcaption>
        </figure>
        <figure className="Wording">
          <label htmlFor="space5">
            <input type="checkbox" />
          </label>
          <figcaption>Stellar Spirit</figcaption>
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
