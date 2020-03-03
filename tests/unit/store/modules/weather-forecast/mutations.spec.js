import mutations from '../../../../../src/store/modules/weather-forecast/mutations';

describe('In mutations', () => {
  it('SET_WEATHER_DETAILS sets state.weatherDetails to weatherDetails', () => {
    const weatherDetails = [{ name: 'testName1' }, { name: 'testName' }];
    const state = {
      weatherDetails: {},
    };
    mutations.SET_WEATHER_DETAILS(state, weatherDetails);
    expect(state.weatherDetails).toBe(weatherDetails);
  });
});
