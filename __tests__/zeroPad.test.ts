import { zeroPad } from '../lib';

describe("A suite for the 'zeroPad' module", () => {
    it('should return a string', () => {
        expect(typeof zeroPad(0)).toBe('string');
    });
    it('should return a string of length 2 by default', () => {
        expect(zeroPad(0).length).toBe(2);
    });
    it('should return a string of length 4', () => {
        expect(zeroPad(0, 4).length).toBe(4);
    });
    it('should return a string which represents a number', () => {
        expect(Number(zeroPad(0))).toBe(0);
        expect(Number(zeroPad(12))).toBe(12);
        expect(typeof Number(zeroPad(NaN))).toBe('number');
        expect(Number(zeroPad(NaN))).toBeNaN();
        expect(Number(zeroPad(Infinity))).toBe(Infinity);
        expect(Number(zeroPad(-Infinity))).toBe(-Infinity);
        expect(Number(zeroPad('0'))).toBe(0);
        expect(Number(zeroPad(1.23))).toBe(1.23);
    });
    it('should pad with zeros correctly', () => {
        expect(zeroPad(0)).toBe('00');
        expect(zeroPad(1)).toBe('01');
        expect(zeroPad(12)).toBe('12');
        expect(zeroPad(123, 5)).toBe('00123');
        expect(zeroPad(123.456, 5)).toBe('00123.456');
        expect(zeroPad(123.456, 5, 8)).toBe('00123.45600000');
    });
    it('should return a string with the correct sign', () => {
        expect(zeroPad('+0')).toBe('+00');
        expect(zeroPad(-1)).toBe('-01');
        expect(zeroPad(-12)).toBe('-12');
        expect(zeroPad(-123, 5)).toBe('-00123');
        expect(zeroPad(-123.456, 5)).toBe('-00123.456');
        expect(zeroPad(-123.456, 5, 4)).toBe('-00123.4560');
        expect(zeroPad('+0123.456', 5, 4)).toBe('+00123.4560');
    });
});
