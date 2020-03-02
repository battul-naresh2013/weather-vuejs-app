export const apiKey = '099a7c33c1be08ed21d565feaedb1fd4';
const defaultCity = 'London';
export const cityApiUrl = '/data/2.5/forecast?id';
// https://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=099a7c33c1be08ed21d565feaedb1fd4

export const defaultCityWeather = `https://api.weatherbit.io/v2.0/current?city=${defaultCity},UA&key=${apiKey}`;
export const allCities = '';
export const actionTypes = {
  getWeatherDetailsAction: 'weatherForecastModule/getWeatherDetailsAction',
  addNotification: 'notification/add',
  getNotification: 'notification/get',
  clearNotification: 'notification/clear',
};
