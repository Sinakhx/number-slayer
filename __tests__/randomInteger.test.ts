import { randomInteger } from '../lib';

describe("A suite for the 'randomInteger' module", () => {
    it('should return a number', () => {
        expect(typeof randomInteger(1, 1)).toBe('number');
    });
    it('should return a number which is integer', () => {
        const randomInt = randomInteger(-5, 17);
        expect(randomInt).toBe(+randomInt.toFixed(0));
        expect(Math.floor(randomInt)).toBe(randomInt);
    });
    it('should return an exact number if both values are the same', () => {
        expect(randomInteger(7, 7)).toBe(7);
    });
    it('should return a number between 5 & 18', () => {
        const randomInt = randomInteger(5, 18);
        expect(randomInt).toBeGreaterThanOrEqual(5);
        expect(randomInt).toBeLessThanOrEqual(18);
    });
    it('should return a number between -2 & 2', () => {
        const randomInt = randomInteger(-2, 2);
        expect(randomInt).toBeGreaterThanOrEqual(-2);
        expect(randomInt).toBeLessThanOrEqual(2);
    });
    it('should return a number between -74 & -73', () => {
        const randomInt = randomInteger(-74, -73);
        expect(randomInt).toBeGreaterThanOrEqual(-74);
        expect(randomInt).toBeLessThanOrEqual(-73);
    });
    it('should swap max & min if max < min', () => {
        const randomInt = randomInteger(-50, -51);
        expect(randomInt).toBeGreaterThanOrEqual(-51);
        expect(randomInt).toBeLessThanOrEqual(-50);
    });
});
