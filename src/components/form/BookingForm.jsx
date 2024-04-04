import React, { useEffect, useState } from "react";
import styles from "./bookingForm.module";

export const BookingForm = ({
  availableTimes,
  updateTimes,
  dispatch,
  submitAPI,
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  /*function updateTimes(e) {
    dispatch({ type: "user_selected_time", newTime: e.target.value });
  }*/

  const handleDateSelection = (e) => {
    setDate(e.target.value);
    updateTimes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };

    console.log(formData);
    submitAPI(formData)
      .then((formData) => {
        console.log("Form submitted successfully:", formData);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

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
          value={/*availableTimes.times[0]*/ time}
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
