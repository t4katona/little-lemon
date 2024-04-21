import { store } from "./store";

const alreadySelectedDates = [];
const fetchAPI = (date) => {
  return Promise.resolve(store.getFreeSlots(date));
};

const submitAPI = (formData) => {
  return Promise.resolve(store.addReservation(formData));
};

export { fetchAPI, submitAPI };
