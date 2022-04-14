import { countIntDigits } from '../lib/countIntDigits';

describe('countIntDigits', () => {
    it('should return the number of digits in the integer part of a number', () => {
        expect(countIntDigits(1462621.12158)).toBe(7);
        expect(countIntDigits(-198989.999)).toBe(6);
        expect(countIntDigits(0)).toBe(1);
        expect(countIntDigits(Number.MAX_SAFE_INTEGER)).toBe(16);
        expect(countIntDigits(Number.MIN_SAFE_INTEGER)).toBe(16);
    });
});
