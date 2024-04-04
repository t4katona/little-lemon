import React, { useEffect, useReducer, useState } from "react";
import { Header } from "../components/header/Header";
import { BookingForm } from "../components/form/BookingForm";

import { fetchAPI, submitAPI, initializeTimes } from "../mockAPI";

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

  //const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const [availableTimes, setAvailableTimes] = useState([]);

  const updateTimes = (date) => {
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
          submitAPI={submitAPI}
        />
      }
      <h1>{availableTimes}</h1>
    </>
  );
};
