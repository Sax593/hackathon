import "./booking.css";
import { useState } from "react";

export default function Booking() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [ship, setShip] = useState("");

  return (
    <div className="form">
      <h1 className="titleBooking">Last minute Booking</h1>
      <form className="quoteForm" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="location">Location</label>
        <label>
          <input
            id="name"
            placeholder="Microtech"
            type="text"
            value={location}
            onChange={(event) => {
              const input = event.target;
              setLocation(input.value);
            }}
          />
          <input
            id="name"
            placeholder="25/11/2956"
            type="date"
            value={date}
            onChange={(event) => {
              const input = event.target;
              setDate(input.value);
            }}
          />
        </label>
        <label htmlFor="ship">Your ship </label>
        <input
          id="name"
          placeholder="890 Jump with 300i"
          type="text"
          value={ship}
          onChange={(event) => {
            const input = event.target;
            setShip(input.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
