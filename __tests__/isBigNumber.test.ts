import { isBigNumber } from '../lib/isBigNumber';

describe('isBigNumber', () => {
    it('should return true if the number is out of +-MAX_SAFE_INTEGER bounds', () => {
        expect(isBigNumber(Number.MAX_SAFE_INTEGER + 1)).toBe(true);
        expect(isBigNumber(Number.MIN_SAFE_INTEGER - 1)).toBe(true);
    });

    it('should return false if the number is within +-MAX_SAFE_INTEGER bounds', () => {
        expect(isBigNumber(Number.MAX_SAFE_INTEGER)).toBe(false);
        expect(isBigNumber(Number.MIN_SAFE_INTEGER)).toBe(false);
        expect(isBigNumber(0)).toBe(false);
        expect(isBigNumber(1462621.12158)).toBe(false);
        expect(isBigNumber(-198989.999)).toBe(false);
    });
});
