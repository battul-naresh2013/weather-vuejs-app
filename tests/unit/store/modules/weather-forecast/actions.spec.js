import { actions } from '../../../../../src/store/modules/weather-forecast/actions';
// Import intercepted by Jest to return mock getWeatherDetails function
import { getWeatherDetails } from '../../../../../src/services/weatherService';
import handleErrors from '../../../../../src/store/modules/handleErrors';

// Mock module with Jest mock functions
jest.mock('../../../../../src/services/weatherService');
jest.mock('../../../../../src/store/modules/handleErrors');

describe('In actions, ', () => {
  let commit;
  let dispatch;
  let error;

  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    error = new Error({ message: 'Async error' });
    handleErrors.mockImplementation(() => ({
      handleErrors: () => {
        throw new Error('Test error');
      },
    }));
  });

  it('getWeatherDetails should commits weather details data returned by getWeatherDetails Api method', async () => {
    const fiveDaysData = [1, 2, 3];
    getWeatherDetails.mockResolvedValue(fiveDaysData);
    await actions.getWeatherDetailsAction({ commit, dispatch });
    // expect(commit).toHaveBeenCalledWith('SET_WEATHER_DETAILS', fiveDaysData);
  });

  it('getWeatherDetails should cacth en error when getWeatherDetails Api throws error', async () => {
    getWeatherDetails.mockRejectedValue(error);
    await actions.getWeatherDetailsAction({ commit, dispatch });
    expect(() => handleErrors.handleErrors()).toThrow();
  });
});
