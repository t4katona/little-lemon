const avaliableTimesMock = {
  "2024-12-12": ["17:00", "18:00", "19:00", "20:00", "21:00"],
};

const initializeTimes = {
  user: null,
  predefined: ["17:00", "18:00", "19:00", "20:00", "21:00"],
};

const testFunc = (date) => {
  initializeTimes.user = date;
  return initializeTimes.predefined;
};

const alreadySelectedDates = [];
const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      testFunc(date);
      let avaliableTimesForSelectedDate = testFunc(date) || [];

      alreadySelectedDates.map((selectedDate) => {
        if (selectedDate.user == initializeTimes.user) {
          avaliableTimesForSelectedDate = initializeTimes.predefined.filter(
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
        resolve(true);
      }
    }, 1000);
  });
};

export { fetchAPI, submitAPI, initializeTimes };
