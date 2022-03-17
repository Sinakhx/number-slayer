/**
 * returns positive remainders in modulus operations
 * @param {number} dividend
 * @param {number} divisor
 * @return {number} positive modulus
 */
export const modulus = (dividend: number, divisor: number): number => ((dividend % divisor) + divisor) % divisor;
