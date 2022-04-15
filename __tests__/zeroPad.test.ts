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
        expect(zeroPad(4, 2, 3)).toBe('04.000');
        expect(zeroPad(4, 0, 2)).toBe('4.00');
        expect(zeroPad(4, 0)).toBe('4');
        expect(zeroPad(4)).toBe('04');
        expect(zeroPad(0.4)).toBe('00.4');
        expect(zeroPad(0.4, 0, 1)).toBe('0.4');
        expect(zeroPad(0.4, 0, 2)).toBe('0.40');
        expect(zeroPad(0.004, 0, 2)).toBe('0.004');
        expect(zeroPad(0.004, 0, 3)).toBe('0.004');
        expect(zeroPad(0.004, 0, 4)).toBe('0.0040');
        expect(zeroPad('1.00400', 1, 4)).toBe('1.0040');
    });
    it('should return a string with the correct sign', () => {
        expect(zeroPad('+0')).toBe('+00');
        expect(zeroPad(-1)).toBe('-01');
        expect(zeroPad(-12)).toBe('-12');
        expect(zeroPad(-123, 5)).toBe('-00123');
        expect(zeroPad(-123.456, 5)).toBe('-00123.456');
        expect(zeroPad(-123.456, 5, 4)).toBe('-00123.4560');
        expect(zeroPad('+0123.456', 5, 4)).toBe('+00123.4560');
        expect(zeroPad(-4, 2, 3)).toBe('-04.000');
        expect(zeroPad(-4, 0, 2)).toBe('-4.00');
        expect(zeroPad(-4, 0)).toBe('-4');
        expect(zeroPad(-4)).toBe('-04');
        expect(zeroPad(-0.4)).toBe('-00.4');
        expect(zeroPad(-0.4, 0, 1)).toBe('-0.4');
        expect(zeroPad(-0.4, 0, 2)).toBe('-0.40');
        expect(zeroPad(-0.004, 0, 2)).toBe('-0.004');
        expect(zeroPad(-0.004, 0, 3)).toBe('-0.004');
        expect(zeroPad(-0.004, 0, 4)).toBe('-0.0040');
        expect(zeroPad('-1.00400', 1, 4)).toBe('-1.0040');
        expect(zeroPad('+00004', 2, 3)).toBe('+04.000');
        expect(zeroPad('-00004', 2, 3)).toBe('-04.000');
        expect(zeroPad('-000004.0000', 0, 2)).toBe('-4.00');
        expect(zeroPad('-000004.0000', 1, 1)).toBe('-4.0');
        expect(zeroPad('-000004.0000', 2, 0)).toBe('-04');
        expect(zeroPad('-000004.0000', 3)).toBe('-004');
        expect(zeroPad('+4', 0)).toBe('+4');
        expect(zeroPad('-4')).toBe('-04');
        expect(zeroPad('-000.400')).toBe('-00.4');
        expect(zeroPad('+00.40', 0, 1)).toBe('+0.4');
        expect(zeroPad('-0.4', 0, 2)).toBe('-0.40');
        expect(zeroPad('-0.004', 0, 2)).toBe('-0.004');
        expect(zeroPad('+000.00400', 0, 3)).toBe('+0.004');
        expect(zeroPad('-0.004', 0, 4)).toBe('-0.0040');
        expect(zeroPad('-1.00400', 1, 4)).toBe('-1.0040');
    });

    it('should support the "addSign" option correctly', () => {
        expect(zeroPad(-129.33, 0, 0, true)).toBe('-129.33');
        expect(zeroPad(+129.33, 0, 0, true)).toBe('+129.33');
        expect(zeroPad(129.33, 0, 0, true)).toBe('+129.33');
        expect(zeroPad('-129.33', 0, 0, true)).toBe('-129.33');
        expect(zeroPad('+129.33', 0, 0, true)).toBe('+129.33');
        expect(zeroPad('129.33', 0, 0, true)).toBe('+129.33');
        expect(zeroPad(-129.33, 0, 0, false)).toBe('-129.33');
        expect(zeroPad(+129.33, 0, 0, false)).toBe('129.33');
        expect(zeroPad('-01.00400', 1, 4, true)).toBe('-1.0040');
        expect(zeroPad('-01.00400', 1, 4, false)).toBe('-1.0040');
        expect(zeroPad('+01.00400', 2, 2, true)).toBe('+01.004');
        expect(zeroPad('+01.00400', 2, 2, false)).toBe('01.004');
        expect(zeroPad(-47.8, 3, 2)).toBe('-047.80');
        expect(zeroPad(47.8, 3, 2)).toBe('047.80');
        expect(zeroPad('+47.8', 3, 2)).toBe('+047.80');
        expect(zeroPad(47.8, 3, 2, true)).toBe('+047.80');
    });
});
