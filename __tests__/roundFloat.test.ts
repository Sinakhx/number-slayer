import { roundFloat } from '../lib';

describe('roundFloat', () => {
    it('should round a float to a specified number of decimal places', () => {
        expect(roundFloat(4)).toBe(4);
        expect(roundFloat(4, 0)).toBe(4);
        expect(roundFloat(4, 5)).toBe(4);
        expect(roundFloat(3.1415, 5)).toBe(3.1415);
        expect(roundFloat(3.1415, 4)).toBe(3.1415);
        expect(roundFloat(3.1415, 3)).toBe(3.142);
        expect(roundFloat(3.1415, 2)).toBe(3.14);
        expect(roundFloat(3.1415, 1)).toBe(3.1);
        expect(roundFloat(1.23456789, 3)).toBe(1.235);
        expect(roundFloat(-1.23456789, 5)).toBe(-1.23457);
        expect(roundFloat(-4897.000141265, 6)).toBe(-4897.000141);
    });

    it('should round a float to a specified number of decimal places with "floor" format', () => {
        expect(roundFloat(4, 0, 'floor')).toBe(4);
        expect(roundFloat(4, 5, 'floor')).toBe(4);
        expect(roundFloat(3.1415, 3, 'floor')).toBe(3.141);
        expect(roundFloat(3.1415, 2, 'floor')).toBe(3.14);
        expect(roundFloat(3.1415, 1, 'floor')).toBe(3.1);
        expect(roundFloat(-4897.000141265, 6, 'floor')).toBe(-4897.000142);
    });

    it('should round a float to a specified number of decimal places with "ceil" format', () => {
        expect(roundFloat(4, 0, 'ceil')).toBe(4);
        expect(roundFloat(4, 5, 'ceil')).toBe(4);
        expect(roundFloat(3.1415, 3, 'ceil')).toBe(3.142);
        expect(roundFloat(3.1415, 2, 'ceil')).toBe(3.15);
        expect(roundFloat(3.1415, 1, 'ceil')).toBe(3.2);
        expect(roundFloat(-4897.000141265, 6, 'ceil')).toBe(-4897.000141);
    });

    it('should round a float to a specified number of decimal places with "round" format', () => {
        expect(roundFloat(4, 0, 'round')).toBe(4);
        expect(roundFloat(4, 5, 'round')).toBe(4);
        expect(roundFloat(3.1415, 3, 'round')).toBe(3.142);
        expect(roundFloat(3.1415, 2, 'round')).toBe(3.14);
        expect(roundFloat(3.1415, 1, 'round')).toBe(3.1);
        expect(roundFloat(-4897.000141265, 6, 'round')).toBe(-4897.000141);
    });
});
