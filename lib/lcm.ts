import { gcd } from './gcd';

/**
 * returns the Least Common Multiple of the argument numbers
 * @param numbers numbers to find the least common multiple of
 * - In arithmetic and number theory, the least common multiple of two integers a and b, is the smallest positive integer that is divisible by both a and b. --Wikipedia
 */
export const lcm = (...numbers: number[]): number => {
    const lc = (a: number, b: number): number => (a * b) / gcd(a, b);
    return Math.abs(numbers.reduce((a, b) => lc(a, b)) || 0);
};
