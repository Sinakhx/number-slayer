import { isNumber } from './isNumber';

/**
 * Rounds a number to the given precision decimals
 * @param num - number or numberString
 * @param precision - precision (decimals)
 * @return - returns number to the given precision decimals. returns the same input if not number
 */
export const toPrecision = <T>(num: T, precision?: number): T | number => {
    if (!precision && precision !== 0) return num;
    const n = +num;
    if (!isNumber(n)) return num;
    const int = Math.floor(n);
    if (precision === 0) return int;
    const float = n - int;
    const coeff = 10 ** precision;
    return Math.round((int + float) * coeff) / coeff;
};
