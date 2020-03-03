// eslint-disable-next-line import/named
import { getWeatherDetails } from '../../../src/services/weatherService';
import clientApi from '../../../src/services/clientApi';

// Mock module with Jest mock functions
jest.mock('../../../src/services/clientApi');

describe('In weather service, ', () => {
  it('getWeatherDetails api should call', () => {
    const fiveDaysData = [1, 2, 3];
    clientApi.get.mockResolvedValue(fiveDaysData);
    getWeatherDetails().then(((result) => {
      expect(result).toEqual(fiveDaysData);
    }));
  });
});
