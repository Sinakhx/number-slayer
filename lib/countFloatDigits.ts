import { isFloat } from './isFloat';

/**
 * Counts the number of decimal places in a float.
 * @param num number to count floating point digits of
 * @returns number of floating point digits in num
 */
export const countFloatDigits = (num: number): number => {
    if (!isFloat(num)) {
        return 0;
    }
    return `${num}`.split('.')[1].length;
};
