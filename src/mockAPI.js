const avaliableTimesMock = {
  "2024-04-10": ["09:00", "10:00", "11:00"],
  "2024-04-11": ["13:00", "14:00", "15:00"],
  "2024-04-26": ["19:00", "20:00", "21:00"],
};

{
  /*avaliableTimesMock.forEach((date) => {
  const times = avaliableTimesMock[date];

  times.forEach((time) => {
    console.log(`Date: ${date}, Time: ${time}`);
  });
});*/
}

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const avaliableTimesForSelectedDate = avaliableTimesMock[date] || [];
      resolve(avaliableTimesForSelectedDate);
    }, 1000);
  });
};

const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true);
      }
    }, 1000);
  });
};

export { fetchAPI, submitAPI };
