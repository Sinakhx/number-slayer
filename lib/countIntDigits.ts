/**
 * returns the number of digits in the integer part of a number
 * @param num the number to count the digits of
 */
export const countIntDigits = (num: number) => Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
