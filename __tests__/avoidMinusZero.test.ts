import { avoidMinusZero } from '../lib';

describe('avoidMinusZero', () => {
    it('should return 0 if num is -0', () => {
        expect(avoidMinusZero(-0)).toBe(0);
    });

    it('should return num if num is not -0', () => {
        expect(avoidMinusZero(0)).toBe(0);
        expect(avoidMinusZero(1)).toBe(1);
        expect(avoidMinusZero(-1)).toBe(-1);
    });
});
