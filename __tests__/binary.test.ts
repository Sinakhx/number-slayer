import { int, bin } from '../lib';

describe('A suite for the binary conversion utils', () => {
    it('should convert an integer number to binary', () => {
        expect(bin(36)).toBe('0b100100');
        expect(bin(0)).toBe('0b0');
        expect(bin(1)).toBe('0b1');
        expect(bin(-36)).toBe('-0b100100');
    });
    it('should convert a binary number to integer', () => {
        expect(int('0b0000')).toBe(0);
        expect(int('0b1')).toBe(1);
        expect(int('0b10')).toBe(2);
        expect(int('0b100100')).toBe(36);
        expect(int('0b100100')).toBe(36);
        expect(int('100100')).toBe(36);
        expect(int('-0b100100')).toBe(-36);
        expect(int('-100100')).toBe(-36);
    });
});
