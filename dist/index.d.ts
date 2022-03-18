/**
 * to avoid +"0" === 0 && +undefined as NaN in accumulative calculations
 * @param input to be counted in iterations
 * @returns 1 if value is 0, else coerces the input value to a number
 */
declare const countWithZeros: (input: unknown) => number;

/**
 * Checks if the given value is a real number. Supports Number object.
 * @param val - value to check
 * @returns true if value is a real number
 */
declare const isNumber: (val: any) => boolean;

/**
 * returns positive remainders in modulus operations
 * @param {number} dividend
 * @param {number} divisor
 * @return {number} positive modulus
 */
declare const modulus: (dividend: number, divisor: number) => number;

/**
 * creates an array of numbers from the starting number up to the ending number with defined step
 * @param start starting number
 * @param end ending number (inclusive)
 * @param step step between numbers (default 1)
 * @returns [start, start + step, ..., end]
 */
declare const numbersList: (start: number, end: number, step?: number) => number[];

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

/**
 * padds a number with zeros (can be used for both the integer and decimal parts)
 * @param num actual number to be padded with zeros
 * @param int length of the desired string for the integer part of the number (defaults to 2)
 * @param dec length of the desired string for the decimal part of the number
 * @returns a string representation of the number with beggining &/or ending zeros
 */
declare const zeroPad: (num: number | string, int?: number, dec?: number | undefined) => string;

export { countWithZeros, isNumber, modulus, numbersList, randomInteger, rollDice, rollMultipleDices, zeroPad };
