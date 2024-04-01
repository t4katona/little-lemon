import React, { useState } from "react";
import styles from "./bookingForm.module";

export const BookingForm = ({ availableTimes, updateTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  function updateTimes(e) {
    dispatch({ type: "user_selected_time", newTime: e.target.value });
  }

  return (
    <>
      <h2>Book Now</h2>
      <form className="general_padding">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          name="res-date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="res-time"
          id="res-time"
          value={availableTimes.times[0]}
          onChange={updateTimes}
        >
          {availableTimes.times.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          aria-label="On Click"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </>
  );
};
