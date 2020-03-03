import { actionTypes } from '../../../shared/appConstants';
import { getWeatherDetails } from '../../../services/weatherService';
import handleErrors from '../handleErrors';
import { getNextFiveDaysData } from '../../../shared/utilities/getNextFiveDaysData';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async getWeatherDetailsAction({ commit, dispatch }, cityId) {
    return getWeatherDetails(cityId)
      .then((weatherDetails) => {
        const fiveDaysData = getNextFiveDaysData(weatherDetails);
        commit('SET_WEATHER_DETAILS', fiveDaysData);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting weather details: ${error.message}`,
        };
        handleErrors(actionTypes.addNotification, notification, dispatch);
      });
  },
};
