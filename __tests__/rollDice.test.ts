import { rollDice, rollDices } from '../lib';

describe("A suite for the 'rollDice' module", () => {
  describe('rollDice', () => {
    it('should return a number', () => {
      expect(typeof rollDice()).toBe('number');
    });
  });
  describe('rollDices', () => {
    it('should return an Array', () => {
      expect(Array.isArray(rollDices())).toBe(true);
    });
  });
});
