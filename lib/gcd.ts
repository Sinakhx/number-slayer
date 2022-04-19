/**
 * returns the Greatest Common Divisor of the argument numbers
 * @param numbers numbers to find the greatest common divisor of
 * - In mathematics, the greatest common divisor of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. --Wikipedia
 */
export const gcd = (...numbers: number[]): number => {
    const gc = (a: number, b: number): number => (b === 0 ? a : gc(b, a % b));
    const res = numbers.filter(Boolean).reduce((a, b) => gc(a, b), numbers[0]) || 0;
    if (!res) return Infinity;
    return Math.abs(res);
};
