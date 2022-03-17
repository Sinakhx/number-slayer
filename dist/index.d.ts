/**
 * @returns a random dice value between 1 and 6
 */
declare const rollDice: () => number;
/**
 * @param count number of dices to roll (default: 1)
 * @returns array of rolled dices values
 */
declare const rollDices: (count?: number) => number[];

/**
 * @param min minimum possible integer
 * @param max maximum possible integer
 * @returns a random integer number between (and including) min & max values
 */
declare const randomInteger: (min: number, max: number) => number;

export { randomInteger, rollDice, rollDices };
