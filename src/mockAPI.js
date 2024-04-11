const avaliableTimesMock = {
  user: null,
  predefined: ["17:00", "18:00", "19:00", "20:00", "21:00"],
};

const createBookingTime = (date) => {
  avaliableTimesMock.user = date;
  return avaliableTimesMock.predefined;
};

const alreadySelectedDates = [];
const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let avaliableTimesForSelectedDate = createBookingTime(date) || [];

      alreadySelectedDates.map((selectedDate) => {
        if (selectedDate.user === avaliableTimesMock.user) {
          avaliableTimesForSelectedDate = avaliableTimesMock.predefined.filter(
            (time) => time !== selectedDate.predefined
          );
        }
      });
      resolve(avaliableTimesForSelectedDate);
    }, 1000);
  });
};

const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        alreadySelectedDates.push({
          user: formData.date,
          predefined: formData.time,
        });
        localStorage.setItem(
          "BookedDate",
          JSON.stringify(alreadySelectedDates)
        );
        resolve(true);
      }
    }, 1000);
  });
};

export { fetchAPI, submitAPI };
