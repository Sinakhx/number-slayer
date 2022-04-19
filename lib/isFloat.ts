/**
 * returns true if num is a float
 * @param num number to be checked
 */
export const isFloat = (num: number): boolean => !Number.isInteger(num) && !Number.isNaN(num) && Number.isFinite(num);
