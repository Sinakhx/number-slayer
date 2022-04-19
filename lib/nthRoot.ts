/**
 * returns the nth root of a number
 * @param num number to take nth root of
 * @param root nth root to take
 */
export const nthRoot = (num: number, root: number): number => 2 ** (Math.log2(num) / root);
