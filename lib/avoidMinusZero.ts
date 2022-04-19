/**
 * converts -0 to 0
 * @param num
 */
export const avoidMinusZero = (num: number): number => num || 0;
