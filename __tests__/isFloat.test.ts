import { isFloat } from '../lib';

describe('isFloat', () => {
    it('should return true if num is a float', () => {
        expect(isFloat(1.5)).toBe(true);
        expect(isFloat(1.25)).toBe(true);
        expect(isFloat(1.75)).toBe(true);
        expect(isFloat(-1.25)).toBe(true);
        expect(isFloat(-1.00075)).toBe(true);
        expect(isFloat(-489265.100756)).toBe(true);
        expect(isFloat(0.0000000000000003)).toBe(true);
        expect(isFloat(-0.0000000000000005)).toBe(true);
        expect(isFloat(1 / Math.sqrt(Math.PI))).toBe(true);
    });

    it('should return false if num is not a float', () => {
        expect(isFloat(0)).toBe(false);
        expect(isFloat(1)).toBe(false);
        expect(isFloat(0.0)).toBe(false);
        expect(isFloat(-1.0)).toBe(false);
        expect(isFloat(12.0)).toBe(false);
        expect(isFloat({} as any)).toBe(false);
        expect(isFloat(NaN)).toBe(false);
        expect(isFloat(undefined as any)).toBe(false);
        expect(isFloat(-Infinity)).toBe(false);
        expect(isFloat(Number.MAX_SAFE_INTEGER)).toBe(false);
    });
});
