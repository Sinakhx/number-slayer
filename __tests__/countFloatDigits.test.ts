import { countFloatDigits } from '../lib/countFloatDigits';

describe('countFloatDigits', () => {
    it('should return the number of digits in the float part of a number', () => {
        expect(countFloatDigits(1462621.12158)).toBe(5);
        expect(countFloatDigits(-198989.999)).toBe(3);
        expect(countFloatDigits(0)).toBe(0);
        expect(countFloatDigits(452.0)).toBe(0);
        expect(countFloatDigits(1e6)).toBe(0);
        expect(countFloatDigits(1e-6)).toBe(6);
        expect(countFloatDigits(Number.MAX_SAFE_INTEGER)).toBe(0);
        expect(countFloatDigits(Number.MIN_SAFE_INTEGER)).toBe(0);
    });
});
