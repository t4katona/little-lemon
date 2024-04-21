import React, { useEffect, useReducer, useState } from "react";
import { Header } from "../components/header/Header";
import { BookingForm } from "../components/form/BookingForm";
import { useNavigate } from "react-router-dom";

import { fetchAPI, submitAPI } from "../mockAPI";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const initializeTimes = [];

export const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log(formData);
    submitAPI(formData)
      .then((formData) => {
        console.log("Form submitted successfully:", formData);
        navigate("/confirmedBooking");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const updateTimes = (date) => {
    fetchAPI(date)
      .then((times) => {
        dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        return times;
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
          submitForm={submitForm}
        />
      }
    </>
  );
};
