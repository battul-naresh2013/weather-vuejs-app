import axios from 'axios';
import clientApi from '../../../src/services/clientApi';

// Mock module with Jest mock functions
jest.mock('../../../src/services/clientApi');

describe('In clientApi', () => {
  const baseURL = 'https://api.openweathermap.org';

  it('clientApi to be defined', () => {
    expect(clientApi).toBeDefined();
  });

  it('axios.create sets the baseUrl', () => {
    const expected = axios.create({
      baseURL,
    });
    expect(clientApi.baseURL).toEqual(expected.baseURL);
  });
});
