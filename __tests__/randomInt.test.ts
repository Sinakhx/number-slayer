import { randomInt } from '../lib';

describe("A suite for the 'randomInt' module", () => {
    it('should return a number', () => {
        expect(typeof randomInt(1, 1)).toBe('number');
    });
    it('should return a number which is integer', () => {
        const int = randomInt(-5, 17);
        expect(int).toBe(+int.toFixed(0));
        expect(Math.floor(int)).toBe(int);
    });
    it('should return an exact number if both values are the same', () => {
        expect(randomInt(7, 7)).toBe(7);
    });
    it('should return a number between 5 & 18', () => {
        const int = randomInt(5, 18);
        expect(int).toBeGreaterThanOrEqual(5);
        expect(int).toBeLessThanOrEqual(18);
    });
    it('should return a number between -2 & 2', () => {
        const int = randomInt(-2, 2);
        expect(int).toBeGreaterThanOrEqual(-2);
        expect(int).toBeLessThanOrEqual(2);
    });
    it('should return a number between -74 & -73', () => {
        const int = randomInt(-74, -73);
        expect(int).toBeGreaterThanOrEqual(-74);
        expect(int).toBeLessThanOrEqual(-73);
    });
    it('should swap max & min if max < min', () => {
        const int = randomInt(-50, -51);
        expect(int).toBeGreaterThanOrEqual(-51);
        expect(int).toBeLessThanOrEqual(-50);
    });
});
