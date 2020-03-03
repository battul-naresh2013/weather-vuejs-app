import { celsius, fahrenheit } from '../../../../src/shared/utilities/temperature-unit-convertor';

describe('In temperature-unit-convertor utility function', () => {
  describe('When celsius function call, ', () => {
    it('it should return temperature in celsius', () => {
      const mockValue = '282.14';
      const expected = celsius(mockValue);
      expect(expected).toEqual(9);
    });
  });

  describe('When fahrenheit function call, ', () => {
    it('it should return temperature in fahrenheit', () => {
      const mockValue = '282.14';
      const expected = fahrenheit(mockValue);
      expect(expected).toEqual(48);
    });
  });
});
