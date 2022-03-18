import { isNumber } from '../lib';

describe("A suite for the 'isNumber' module", () => {
    it('should return boolean', () => {
        expect(typeof isNumber(1)).toBe('boolean');
        expect(typeof isNumber({})).toBe('boolean');
    });
    it('should return true when using the Number object on numeral values', () => {
        expect(isNumber(new Number(-92))).toBe(true);
    });
    it('should return true for real numbers', () => {
        expect(isNumber(1)).toBe(true);
        expect(isNumber(0)).toBe(true);
        expect(isNumber(-1)).toBe(true);
        expect(isNumber(1.1)).toBe(true);
        expect(isNumber(-1.1)).toBe(true);
        expect(isNumber(-45263.002548602569)).toBe(true);
        expect(isNumber(1 / Math.sqrt(Math.PI))).toBe(true);
        expect(isNumber(Number.EPSILON)).toBe(true);
        expect(isNumber(Number.MIN_VALUE)).toBe(true);
        expect(isNumber(Number.MAX_VALUE)).toBe(true);
        expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
        expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    });
    it('should return false for non-zero falsy values & infinities', () => {
        expect(isNumber(false)).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber('0')).toBe(false);
        expect(isNumber(' ')).toBe(false);
        expect(isNumber('\t')).toBe(false);
        expect(isNumber('\n')).toBe(false);
        expect(isNumber('\r')).toBe(false);
        expect(isNumber(NaN)).toBe(false);
        expect(isNumber(Infinity)).toBe(false);
        expect(isNumber(-Infinity)).toBe(false);
    });
    it('should return false for reference values', () => {
        expect(isNumber(new Boolean(true))).toBe(false);
        expect(isNumber(new String('1'))).toBe(false);
        expect(isNumber(new Date())).toBe(false);
        expect(isNumber(new RegExp('.'))).toBe(false);
        expect(isNumber(new Error())).toBe(false);
        expect(isNumber(new Array(1))).toBe(false);
        expect(isNumber(new Map())).toBe(false);
        expect(isNumber(new Set())).toBe(false);
        expect(isNumber(new WeakMap())).toBe(false);
        expect(isNumber(new WeakSet())).toBe(false);
        expect(isNumber(new Promise(() => {}))).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(function () {})).toBe(false);
    });
});
