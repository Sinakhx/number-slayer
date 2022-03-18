import { faToEnNumber, enToFaNumber } from '../lib';

describe("A suite for the 'persianHelper' module", () => {
    describe("tests for the 'faToEnNumber' util", () => {
        it('should convert Persian numbers to English numbers', () => {
            expect(faToEnNumber('۱۲۳۴۵۶۷۸۹')).toBe('123456789');
            expect(faToEnNumber('۰۰۰۰۰۰۰')).toBe('0000000');
            expect(faToEnNumber('۴۳۵۸.۹۰۰۲۹')).toBe('4358.90029');
            expect(faToEnNumber('۴۳۵۸/۹۰۰۲۹')).toBe('4358/90029');
        });
    });
    describe("tests for the 'enToFaNumber' util", () => {
        it('should convert English numbers to Persian numbers', () => {
            expect(enToFaNumber('123456789')).toBe('۱۲۳۴۵۶۷۸۹');
            expect(enToFaNumber('0000000')).toBe('۰۰۰۰۰۰۰');
            expect(enToFaNumber('4358.90029')).toBe('۴۳۵۸.۹۰۰۲۹');
            expect(enToFaNumber('4358/90029')).toBe('۴۳۵۸/۹۰۰۲۹');
        });
        it('should convert En to Fa for numeric inputs as well', () => {
            expect(enToFaNumber(123456789)).toBe('۱۲۳۴۵۶۷۸۹');
            expect(enToFaNumber(0)).toBe('۰');
            expect(enToFaNumber(-4358.90029)).toBe('-۴۳۵۸.۹۰۰۲۹');
        });
    });
    describe('tests for sentences', () => {
        it('should keep non-numeric characters while converting numbers', () => {
            expect(faToEnNumber("It's ۲۵۰۰۰ Toman")).toBe("It's 25000 Toman");
            expect(enToFaNumber("It's 25000 Toman")).toBe("It's ۲۵۰۰۰ Toman");
            expect(faToEnNumber('He knows -25.48 is -۲۵.۴۸')).toBe('He knows -25.48 is -25.48');
        });
    });
});
