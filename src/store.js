const RESERVATIONS_LOCAL_STORAGE_KEY = "reservations";

const defaultAvailableHours = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

const saveReservations = (reservations) => {
  localStorage.setItem(
    RESERVATIONS_LOCAL_STORAGE_KEY,
    JSON.stringify(reservations)
  );
};

class Store {
  #reservations = {};
  constructor() {
    let reservations = localStorage.getItem(RESERVATIONS_LOCAL_STORAGE_KEY);
    if (!reservations) {
      saveReservations({});
    }
    this.#reservations = reservations ? JSON.parse(reservations) : {};
  }

  getFreeSlots(date) {
    const currentDayReservations = Object.keys(this.#reservations[date] || {});
    if (!currentDayReservations.length) return defaultAvailableHours;
    return defaultAvailableHours.filter(
      (value) => !currentDayReservations.includes(value)
    );
  }

  addReservation({ date, time, guests, occasion }) {
    const reservationSlot = this.#reservations[date]?.[time];
    if (reservationSlot) {
      return false;
    }

    if (!reservationSlot) {
      this.#reservations[date] = {};
    }

    this.#reservations[date][time] = { guests, occasion };
    saveReservations(this.#reservations);
    return true;
  }
}

export const store = new Store();
