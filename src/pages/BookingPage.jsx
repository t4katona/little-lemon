import React, { useEffect, useReducer, useState } from "react";
import { Header } from "../components/header/Header";
import { BookingForm } from "../components/form/BookingForm";

import { fetchAPI, submitAPI } from "../mockAPI";

/*const updateTimes = (state, action) => {
  switch (action.type) {
    case "user_selected_time":
      return { times: [action.newTime] };
    default:
      return state;
  }
};*/

export const BookingPage = () => {
  //const [avaliableTimes, setAvaliableTimes] = useState("");

  /*const initializeTimes = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };*/
  //const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const updateTimes = (date) => {
    setSelectedDate(date);
    fetchAPI(date)
      .then((times) => {
        setAvailableTimes(times);
      })
      .catch((error) => {
        console.error("fetchAPI error:", error);
      });
  };

  return (
    <>
      <Header />
      {
        <BookingForm
          updateTimes={updateTimes}
          availableTimes={availableTimes}
        />
      }
      <h1>{availableTimes}</h1>
    </>
  );
};
