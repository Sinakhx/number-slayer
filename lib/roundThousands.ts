import { countIntDigits } from './countIntDigits';

type Format = 'round' | 'floor' | 'ceil';

/**
 * rounds a real number to a certain multiple of 10
 * @param num number to be rounded
 * @param precision number of digits from left not to be rounded (default: 1)
 * @param format "round" | "floor" | "ceil" (default: "round")
 * @returns rounded number
 */
export const roundThousands = (num: number, precision = 1, format: Format = 'round') => {
    const numDigits = countIntDigits(num);
    return Math[format](num / 10 ** (numDigits - precision)) * 10 ** (numDigits - precision);
};
