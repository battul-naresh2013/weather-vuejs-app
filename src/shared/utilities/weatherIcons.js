/* eslint-disable quote-props */
const getWeatherIcon = ((icon) => {
  const iconNumber = icon.replace(/\D/g, '');
  const iconMap = {
    '01': 'wi-day-sunny',
    '02': 'wi-night-cloudy',
    '03': 'wi-cloud',
    '04': 'wi-cloudy',
    '09': 'wi-showers',
    '10': 'wi-rain',
    '11': 'wi-thunderstorm',
    '13': 'wi-snow-wind',
    '50': 'wi-fog',
  };
  return iconMap[iconNumber] ? iconMap[iconNumber] : 'wi-day-sunny';
});

export default getWeatherIcon;
