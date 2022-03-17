import { numbersList } from '../lib';

describe("A suite for the 'numbersList' module", () => {
    it('should return an array', () => {
        expect(Array.isArray(numbersList(1, 5))).toBe(true);
        expect(Array.isArray(numbersList(1, 1))).toBe(true);
        expect(Array.isArray(numbersList(2, 1))).toBe(true);
        expect(Array.isArray(numbersList(-2, -2))).toBe(true);
    });
    it('should return an array of numbers', () => {
        const types = new Set(numbersList(1, 10, 2).map((x) => typeof x));
        expect(types.has('number')).toBe(true);
        expect(types.size).toEqual(1);
    });
    it('should return an empty array if max < min', () => {
        expect(numbersList(9, 7, 2)).toEqual([]);
    });
    it('should return an array of numbers from the starting number up to the ending number with defined step', () => {
        expect(numbersList(1, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(numbersList(1, 1)).toEqual([1]);
        expect(numbersList(-2, 18, 3)).toEqual([-2, 1, 4, 7, 10, 13, 16]);
    });
    it('should return an empty array for negative step values', () => {
        expect(numbersList(1, 5, -1)).toEqual([]);
    });
});
