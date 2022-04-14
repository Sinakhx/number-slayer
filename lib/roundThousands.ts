import { countIntDigits } from './countIntDigits';

type Format = 'round' | 'floor' | 'ceil';

/**
 * rounds a big number to a certain power of 10
 * @param num big number to be rounded
 * @param precision number of digits from left not to be rounded (default: 1)
 * @param format "round" | "floor" | "ceil" (default: "round")
 * @returns rounded number
 */
export const roundThousands = (num: number, precision = 1, format: Format = 'round') => {
    const numDigits = countIntDigits(num);
    return Math[format](num / 10 ** (numDigits - precision)) * 10 ** (numDigits - precision);
};
