/**
 * finds numbers and truthy values
 * (to avoid +undefined as NaN count zeros as well in accumulative calculations)
 * @param input to be counted in iterations
 * @returns 1 if value is 0, else coerces the input value to a number
 */
export const countWithZeros = (input: unknown): number => (input === 0 || input === '0' ? 1 : +!!input);
