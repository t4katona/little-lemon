import React from "react";
import styles from "./bookingForm.module";

export const BookingForm = () => {
  return (
    <form className="general_padding">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" name="res-date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select name="res-time" id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select name="occasion" id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
