// eslint-disable-next-line import/prefer-default-export
export const getNextFiveDaysData = (weatherDetails) => {
  const weather = weatherDetails && weatherDetails.list ? { ...weatherDetails } : [];
  weather.list.length = 40;
  const fiveDayData = weather.list.filter((e, i) => i % 8 === 8 - 1);
  return fiveDayData;
};
