import { addCommasToNumber } from '../lib';

describe("A suite for the 'addCommasToNumber' module", () => {
    it('should add commas to numbers string', () => {
        expect(addCommasToNumber('1243562865')).toBe('1,243,562,865');
        expect(addCommasToNumber('-12665526.25486')).toBe('-12,665,526.25486');
    });
    it('should add custom commas to numbers string', () => {
        expect(addCommasToNumber('1243562865', '/')).toBe('1/243/562/865');
        expect(addCommasToNumber('-12665526.25486', "'")).toBe("-12'665'526.25486");
    });
    it('should also work nicely with number inputs', () => {
        expect(addCommasToNumber(1243562865, '/')).toBe('1/243/562/865');
        expect(addCommasToNumber(-12665526.25486, "'")).toBe("-12'665'526.25486");
    });
    it('should handle zeros & empty strings', () => {
        expect(addCommasToNumber(0)).toBe('0');
        expect(addCommasToNumber('')).toBe('');
        expect(addCommasToNumber('   ')).toBe('   ');
        expect(addCommasToNumber('', '')).toBe('');
        expect(addCommasToNumber('', ',')).toBe('');
    });
});
