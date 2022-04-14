import { roundThousands } from '../lib/roundThousands';

describe('roundThousands', () => {
    it('should round a big number to a certain multiple of 10', () => {
        expect(roundThousands(1462621.12158)).toBe(1000000);
        expect(roundThousands(-198989.999)).toBe(-200000);
        expect(roundThousands(524500000000)).toBe(500000000000);
        expect(roundThousands(0)).toBe(0);
    });

    it('should round a big number to a certain multiple of 10 with 3 digits percision', () => {
        expect(roundThousands(1462621.12158, 3)).toBe(1460000);
        expect(roundThousands(-198989.999, 3)).toBe(-199000);
        expect(roundThousands(524578000000, 3)).toBe(525000000000);
    });

    it('should round a big number to a certain multiple of 10 with "floor" format', () => {
        expect(roundThousands(1462621.12158, 3, 'floor')).toBe(1460000);
        expect(roundThousands(-198989.999, 3, 'floor')).toBe(-199000);
        expect(roundThousands(524578000000, 3, 'floor')).toBe(524000000000);
    });

    it('should round a big number to a certain multiple of 10 with "ceil" format', () => {
        expect(roundThousands(1462621.12158, 3, 'ceil')).toBe(1470000);
        expect(roundThousands(-198989.999, 3, 'ceil')).toBe(-198000);
        expect(roundThousands(524578000000, 3, 'ceil')).toBe(525000000000);
    });

    it('should round a big number to a certain multiple of 10 with "round" format', () => {
        expect(roundThousands(1462621.12158, 2, 'round')).toBe(1500000);
        expect(roundThousands(-198989.999, 2, 'round')).toBe(-200000);
        expect(roundThousands(524578000000, 2, 'round')).toBe(520000000000);
    });
});
