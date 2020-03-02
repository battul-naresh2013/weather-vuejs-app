import { actionTypes } from '../../../shared/appConstants';
import getWeatherDetails from '../../../services/weatherService';
import handleErrors from '../handleErrors';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async getWeatherDetailsAction({ commit, dispatch }, cityId) {
    debugger;
    return getWeatherDetails(cityId)
      .then((weatherDetails) => {
        commit('SET_WEATHER_DETAILS', weatherDetails);
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
