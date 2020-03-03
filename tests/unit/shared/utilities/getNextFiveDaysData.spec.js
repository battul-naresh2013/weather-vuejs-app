import { getNextFiveDaysData } from '../../../../src/shared/utilities/getNextFiveDaysData';
import weatherMockData from './weatherData.fixture';

describe('In getNextFiveDaysData utility function', () => {
  it('it should return first five days data', () => {
    const expected = getNextFiveDaysData(weatherMockData);
    expect(expected[0].dt_txt).toEqual(weatherMockData.list[7].dt_txt);
  });
});
