import React, { useReducer, useState } from "react";
import { Header } from "../components/header/Header";
import { BookingForm } from "../components/form/BookingForm";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "user_selected_time":
      return { times: [action.newTime] };
    default:
      return state;
  }
};

export const BookingPage = () => {
  //const [avaliableTimes, setAvaliableTimes] = useState("");

  const initializeTimes = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Header />
      <BookingForm availableTimes={state} dispatch={dispatch} />
      <h1>{}</h1>
    </>
  );
};
