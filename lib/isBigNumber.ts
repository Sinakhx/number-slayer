/**
 * checks if the number is out of +-MAX_SAFE_INTEGER bounds
 * @param num number
 * @returns true if the number is too big
 */
export const isBigNumber = (num: number) => num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER;
