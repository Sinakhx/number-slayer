import { lcm } from '../lib';

describe('lcm', () => {
    it('should return zero for zeros', () => {
        expect(lcm(0)).toBe(0);
        expect(lcm(0, 0)).toBe(0);
        expect(lcm(0, 0, 0)).toBe(0);
    });

    it('should always return 0 if there is a single zero in the args', () => {
        expect(lcm(0, 1)).toBe(0);
        expect(lcm(0, 4, 0)).toBe(0);
        expect(lcm(0, 9, 0, 12)).toBe(0);
        expect(lcm(-14, -7, 0, -21, 21)).toBe(0);
    });

    it('should work correctly for negative values', () => {
        expect(lcm(-15, -20)).toBe(60);
        expect(lcm(-15, 20)).toBe(60);
        expect(lcm(15, -20)).toBe(60);
    });
    it('should return the least common multiple of the argument numbers', () => {
        expect(lcm(1)).toBe(1);
        expect(lcm(7)).toBe(7);
        expect(lcm(2, 8)).toBe(8);
        expect(lcm(6, 4)).toBe(12);
        expect(lcm(-4, 6)).toBe(12);
        expect(lcm(-6, 4)).toBe(12);
        expect(lcm(-6, -4)).toBe(12);
        expect(lcm(15, 20)).toBe(60);
        expect(lcm(2, 3, 5)).toBe(30);
        expect(lcm(22, 33, 77)).toBe(462);
        expect(lcm(2, 3, 5, -7)).toBe(210);
        expect(lcm(-95, -25, -55)).toBe(5225);
    });
});
