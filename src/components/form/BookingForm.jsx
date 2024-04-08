import React, { useEffect, useState } from "react";
import styles from "./bookingForm.module";

export const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleDateSelection = (e) => {
    setDate(e.target.value);
    updateTimes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };
    submitForm(formData);
    console.log("Form submitted");
  };

  useEffect(() => {});

  return (
    <>
      <h2>Book Now</h2>
      <form className="general_padding">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          name="res-date"
          id="res-date"
          onChange={(e) => handleDateSelection(e)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="res-time"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((item) => (
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
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};
