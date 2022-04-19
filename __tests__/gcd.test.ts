import { gcd } from '../lib';

describe('gcd', () => {
    it('should return Infinity for zeros', () => {
        expect(gcd(0)).toBe(Infinity);
        expect(gcd(0, 0)).toBe(Infinity);
        expect(gcd(0, 0, 0)).toBe(Infinity);
    });

    it('should neglect in-between zeros', () => {
        expect(gcd(0, 1)).toBe(1);
        expect(gcd(0, 4, 0)).toBe(4);
        expect(gcd(0, 9, 0, 12)).toBe(3);
    });

    it('should work correctly for negative values', () => {
        expect(gcd(-14, -7)).toBe(7);
        expect(gcd(-14, -7, 0, -21, 21)).toBe(7);
        expect(gcd(-14, -5, 0, -19, 21, 0)).toBe(1);
    });
    it('should return the greatest common divisor of the argument numbers', () => {
        expect(gcd(1)).toBe(1);
        expect(gcd(0, 1)).toBe(1);
        expect(gcd(1, 2)).toBe(1);
        expect(gcd(2, 1)).toBe(1);
        expect(gcd(2, 2)).toBe(2);
        expect(gcd(12, 16)).toBe(4);
        expect(gcd(12, 16, 18)).toBe(2);
        expect(gcd(12, 16, 28)).toBe(4);
        expect(gcd(12, 16, 28, 18)).toBe(2);
        expect(gcd(12, 18, 36)).toBe(6);
        expect(gcd(21, 56, 63, 91)).toBe(7);
        expect(gcd(21, 56, 63, 91, 12)).toBe(1);
        expect(gcd(57, 247, 323, 551, 0)).toBe(19);
    });
});
