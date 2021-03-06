import { split } from '../lib';

describe('split', () => {
    it('should split a float into a whole number and a fractional part', () => {
        expect(split(1.5)).toEqual([1, 0.5]);
        expect(split(1.25)).toEqual([1, 0.25]);
        expect(split(1.75)).toEqual([1, 0.75]);
        expect(split(1.0)).toEqual([1, 0]);
        expect(split(0.0)).toEqual([0, 0]);
        expect(split(-1.0)).toEqual([-1, 0]);
        expect(split(-1.25)).toEqual([-1, -0.25]);
        expect(split(-1.00075)).toEqual([-1, -0.00075]);
        expect(split(1.23456789)).toEqual([1, 0.23456789]);
        expect(split(-489265.100756)).toEqual([-489265, -0.100756]);
        const num1 = 0.0000000000000003;
        expect(split(num1)).toEqual([0, num1]);
        const num2 = -0.0000000000000005;
        expect(split(num2)).toEqual([0, num2]);
        const num3 = 0.0000000000000003;
        expect(split(num3)).toEqual([0, num3]);
        const num4 = -0.9999999999999998;
        expect(split(num4)).toEqual([0, num4]);
        const num5 = -0.9999999999999998;
        expect(split(num5)).toEqual([0, num5]);
        const num6A = 1.000000000000003;
        const num6Dec = 0.000000000000003;
        expect(split(num6A)).toEqual([1, num6Dec]);
        const num7A = -1.000000000000005;
        const num7Dec = -0.000000000000005;
        expect(split(num7A)).toEqual([-1, num7Dec]);
        const num8A = 1.000000000000003;
        const num8Dec = 0.000000000000003;
        expect(split(num8A)).toEqual([1, num8Dec]);
        const num9A = -598.9999999999998;
        const num9Dec = -0.9999999999998;
        expect(split(num9A)).toEqual([-598, num9Dec]);
        const num10A = -10.999999999999998;
        const num10Dec = -0.999999999999998;
        expect(split(num10A)).toEqual([-10, num10Dec]);
    });
});
