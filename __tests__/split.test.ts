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
        expect(split(-1.00075)[0]).toBeCloseTo(-1);
        expect(split(-1.00075)[1]).toBeCloseTo(-0.00075);
        expect(split(-489265.100756)[0]).toBeCloseTo(-489265);
        expect(split(-489265.100756)[1]).toBeCloseTo(-0.100756);
        expect(split(0.0000000000000003)).toEqual([0, 0.0000000000000003]);
        expect(split(-0.0000000000000005)).toEqual([0, -0.0000000000000005]);
    });
});
