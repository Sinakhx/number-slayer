import { nthRoot } from '../lib';

describe('nthRoot', () => {
    it('should return the nth root of a number', () => {
        expect(nthRoot(4, 0)).toBe(Infinity);
        expect(nthRoot(4, 1)).toBe(4);
        expect(nthRoot(4, 2)).toBe(2);
        expect(nthRoot(4, 3)).toBeCloseTo(1.587401051968);
        expect(nthRoot(16, 4)).toBe(2);
        expect(nthRoot(7 * 7 * 7 * 7 * 7 * 7, 3)).toBeCloseTo(49);
        expect(nthRoot(7 * 7 * 7 * 7 * 7 * 7, 6)).toBe(7);
        expect(nthRoot(7 * 7 * 7 * 7 * 7, 5)).toBe(7);
        expect(nthRoot(7 * 7 * 7 * 7, 4)).toBe(7);
        expect(nthRoot(7 * 7 * 7, 3)).toBe(7);
        expect(nthRoot(7 * 7, 2)).toBe(7);
        expect(nthRoot(7, 1)).toBe(7);
        expect(nthRoot(789, 17)).toBeCloseTo(1.4805268718);
        expect(nthRoot(789, 17)).toBeCloseTo(1.4805268718);
    });
});
