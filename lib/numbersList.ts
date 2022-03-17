/**
 * creates an array of numbers from the starting number up to the ending number with defined step
 * @param start starting number
 * @param end ending number (inclusive)
 * @param step step between numbers (default 1)
 * @returns [start, start + step, ..., end]
 */
export const numbersList = (start: number, end: number, step: number = 1): number[] =>
    Array.from({ length: Math.ceil((end - start + 1) / step) }, (_, i) => start + i * step);
