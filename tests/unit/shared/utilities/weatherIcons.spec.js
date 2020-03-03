import getWeatherIcon from '../../../../src/shared/utilities/weatherIcons';

describe('In getWeatherIcon utility function', () => {
  it('it should return css name', () => {
    const mockValue = '10d';
    const expected = getWeatherIcon(mockValue);
    expect(expected).toEqual('wi-rain');
  });

  it('it should return default css name as wi-day-sunny', () => {
    const mockValue = '34334d';
    const expected = getWeatherIcon(mockValue);
    expect(expected).toEqual('wi-day-sunny');
  });
});
