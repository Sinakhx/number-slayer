import { toPrecision } from '../lib';

describe("A suite for the 'toPrecision' module", () => {
    it('should return param if not number', () => {
        expect(toPrecision('foo')).toBe('foo');
        expect(toPrecision('bar', 2)).toBe('bar');
    });
    it('should convert to number if is numberString', () => {
        expect(toPrecision('25', 0)).toBe(25);
        expect(toPrecision('-25', 0)).toBe(-25);
    });
    it('should return zero if is zero', () => {
        expect(toPrecision(0)).toBe(0);
    });
    it('should return correct result for -12.43', () => {
        expect(toPrecision(-12.43)).toBe(-12.43);
        expect(toPrecision(-12.43, 2)).toBe(-12.43);
        expect(toPrecision(-12.43, 1)).toBe(-12.4);
        expect(toPrecision(-12.43, 0)).toBe(-13);
    });
    it('should return correct result for 11.2653', () => {
        expect(toPrecision(11.2653)).toBe(11.2653);
        expect(toPrecision(11.2653, 2)).toBe(11.27);
        expect(toPrecision(11.2653, 1)).toBe(11.3);
        expect(toPrecision(11.2653, 0)).toBe(11);
    });
});
