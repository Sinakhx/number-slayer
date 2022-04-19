import { split } from './split';
import type { Format } from './types';

/**
 * rounds a float to a specified number of decimal places
 * @param num number to round to specified decimal places
 * @param precision number of decimal places to round to (default: 14)
 * @param format "round" | "floor" | "ceil" (default: "round")
 * @returns rounded number
 */
export const roundFloat = (num: number, precision: number = 14, format: Format = 'round') => {
    const [int, float] = split(num);
    const coeff = 10 ** precision;
    return int + Math[format](float * coeff) / coeff;
};
