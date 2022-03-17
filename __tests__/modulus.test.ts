import { modulus } from '../lib';

describe("A suite for the 'modulus' module", () => {
    it('should caculate modulus of a number', () => {
        expect(modulus(10, 5)).toBe(0);
    });
    it('should return positive value for negative divideneds', () => {
        expect(modulus(-11, 5)).toBeGreaterThanOrEqual(0);
    });
});
