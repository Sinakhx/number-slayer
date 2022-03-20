import { countWithZeros } from '../lib';

describe("A suite for the 'countWithZeros' module", () => {
    it('should return a number', () => {
        expect(typeof countWithZeros(0)).toBe('number');
    });
    it('should return 1 if value is 0', () => {
        expect(countWithZeros(0)).toBe(1);
    });
    it('should coerce inputs which are not numbers', () => {
        expect(countWithZeros('0')).toBe(1);
        expect(countWithZeros(undefined)).toBe(0);
        expect(countWithZeros(null)).toBe(0);
        expect(countWithZeros(NaN)).toBe(0);
        expect(countWithZeros(true)).toBe(1);
        expect(countWithZeros(false)).toBe(0);
        expect(countWithZeros([])).toBe(1);
        expect(countWithZeros({})).toBe(1);
        expect(countWithZeros(() => {})).toBe(1);
    });
    it('should count numeric values', () => {
        const mixedArray = [null, undefined, 0, '0', 6, '345', '-12', ''];
        const passList = mixedArray.filter(countWithZeros);
        expect(passList).toEqual([0, '0', 6, '345', '-12']);
        expect(passList.length).toBe(5);
    });
});
