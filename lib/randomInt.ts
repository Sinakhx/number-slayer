/**
 * @param min minimum possible integer (inclusive)
 * @param max maximum possible integer (inclusive)
 * @returns a random integer number between (and including) min & max values
 */
export const randomInt = (min: number, max: number): number => {
    if (max < min) return randomInt(max, min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
