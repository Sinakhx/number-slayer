import { rollDice, rollMultipleDices } from '../lib';

describe("A suite for the 'rollDice' module", () => {
    describe('rollDice', () => {
        it('should return a number', () => {
            expect(typeof rollDice()).toBe('number');
        });
        it('should be a number be in range [1-6]', () => {
            expect(rollDice()).toBeGreaterThanOrEqual(1);
            expect(rollDice()).toBeLessThanOrEqual(6);
        });
    });
    describe('rollMultipleDices', () => {
        it('should return an Array of rolled dices', () => {
            expect(Array.isArray(rollMultipleDices())).toBe(true);
            expect(rollMultipleDices(4).length).toBe(4);
            rollMultipleDices(4).forEach((dice) => {
                expect(dice).toBeGreaterThanOrEqual(1);
                expect(dice).toBeLessThanOrEqual(6);
            });
        });
        it('should return an empty array if param is 0', () => {
            expect(rollMultipleDices(0)?.length).toBe(0);
        });
        it('should throw if param is a negative value', () => {
            expect(() => rollMultipleDices(-2)).toThrowError();
        });
    });
});
