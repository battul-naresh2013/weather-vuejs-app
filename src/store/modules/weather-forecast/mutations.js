const mutations = {
  SET_ALL_CITIES(state, allCities) {
    state.allCities = allCities;
  },
  SET_WEATHER_DETAILS(state, weatherDetails) {
    const weather = weatherDetails && weatherDetails.list ? { ...weatherDetails } : [];
    weather.list.length = 40;
    // eslint-disable-next-line camelcase
    const every_8th = weather.list.filter((e, i) => i % 8 === 8 - 1);
    // eslint-disable-next-line camelcase
    state.weatherDetails = every_8th;
  },
};

export default mutations;
