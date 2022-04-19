/**
 * seperates a number with commas every three digits
 * @param number number to add commas to
 * @param delimiter delimiter to use between each group of digits (comma type)
 * @returns a comma separated number
 */
declare const addCommasToNumber: (number: number | string, delimiter?: string) => string;

/**
 * converts -0 to 0
 * @param num
 */
declare const avoidMinusZero: (num: number) => number;

/**
 * converts an integer number to binary
 * @param bin binary string of a number to be converted to integer
 * @returns integer value of the binary string
 */
declare const int: (bin: string) => number;
/**
 * converts a binary number to integer
 * @param num integer number to be converted to binary
 * @returns the binary version of a specified integer
 */
declare const bin: (num: number) => string;

/**
 * returns the number of digits in the integer part of a number
 * @param num the number to count the digits of
 */
declare const countIntDigits: (num: number) => number;

/**
 * finds numbers and truthy values
 * (to avoid +undefined as NaN count zeros as well in accumulative calculations)
 * @param input to be counted in iterations
 * @returns 1 if value is 0, else coerces the input value to a number
 */
declare const countWithZeros: (input: unknown) => number;

/**
 * checks if the number is out of +-MAX_SAFE_INTEGER bounds
 * @param num number
 * @returns true if the number is too big
 */
declare const isBigNumber: (num: number) => boolean;

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

declare const enToFaNumber: (num: number | string) => string;
declare const faToEnNumber: (num: number | string) => string;
declare const toFaPercent: (number: number | string) => string;

/**
 * @param min minimum possible integer (inclusive)
 * @param max maximum possible integer (inclusive)
 * @returns a random integer number between (and including) min & max values
 */
declare const randomInt: (min: number, max: number) => number;

/**
 * creates an array of numbers from the starting number up to the ending number with defined step
 * @param start starting number
 * @param end ending number (exclusive)
 * @param step step between numbers (default 1)
 * @returns [start, start + step, ..., end)
 */
declare const range: (start: number, end: number, step?: number) => number[];

/**
 * @returns a random dice value between 1 and 6
 */
declare const rollDice: () => number;
/**
 * @param count number of dices to roll (default: 1)
 * @returns array of rolled dices values
 */
declare const rollMultipleDices: (count?: number) => number[];

declare type Format = 'round' | 'floor' | 'ceil';

/**
 * rounds a real number to a certain multiple of 10
 * @param num number to be rounded
 * @param precision number of digits from left not to be rounded (default: 1)
 * @param format "round" | "floor" | "ceil" (default: "round")
 * @returns rounded number
 */
declare const roundThousands: (num: number, precision?: number, format?: Format) => number;

/**
 * Rounds a number to the given precision decimals
 * @param num - number or numberString
 * @param precision - precision (decimals)
 * @return - returns number to the given precision decimals. returns the same input if not number
 */
declare const toPrecision: <T>(num: T, precision?: number | undefined) => number | T;

/**
 * padds a number with zeros (can be used for both the integer and decimal parts)
 * @param num actual number to be padded with zeros
 * @param int length of the desired string for the integer part of the number (defaults to 2)
 * @param dec length of the desired string for the decimal part of the number
 * @param addSign if true, the positive sign of the number will also be added to the beginning of the resulting string
 * - if the argument number is a positive signed number-string, the sign will be added to the beginning of the resulting string (default behavior)
 * - `NOTE`: the negative sign will be added regardless of the value of this argument
 * @returns a string representation of the number with beggining &/or ending zeros
 */
declare const zeroPad: (num: number | string, int?: number, dec?: number | undefined, addSign?: boolean | undefined) => string;

export { addCommasToNumber, avoidMinusZero, bin, countIntDigits, countWithZeros, enToFaNumber, faToEnNumber, int, isBigNumber, isNumber, modulus, randomInt, range, rollDice, rollMultipleDices, roundThousands, toFaPercent, toPrecision, zeroPad };
