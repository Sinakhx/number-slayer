/**
 * to avoid +"0" === 0 && +undefined as NaN in accumulative calculations
 * @param input to be counted in iterations
 * @returns 1 if value is 0, else coerces the input value to a number
 */
declare const countWithZeros: (input: unknown) => number;

/**
 * returns positive remainders in modulus operations
 * @param {number} dividend
 * @param {number} divisor
 * @return {number} positive modulus
 */
declare const modulus: (dividend: number, divisor: number) => number;

/**
 * @param min minimum possible integer
 * @param max maximum possible integer
 * @returns a random integer number between (and including) min & max values
 */
declare const randomInteger: (min: number, max: number) => number;

/**
 * @returns a random dice value between 1 and 6
 */
declare const rollDice: () => number;
/**
 * @param count number of dices to roll (default: 1)
 * @returns array of rolled dices values
 */
declare const rollMultipleDices: (count?: number) => number[];

export { countWithZeros, modulus, randomInteger, rollDice, rollMultipleDices };
