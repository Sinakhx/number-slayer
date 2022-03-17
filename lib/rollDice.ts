/**
 * @returns a random dice value between 1 and 6
 */
export const rollDice = (): number => Math.floor(Math.random() * 6) + 1;

/**
 * @param count number of dices to roll (default: 1)
 * @returns array of rolled dices values
 */
export const rollMultipleDices = (count: number = 1): number[] =>
    Array(count)
        .fill(0)
        .map(() => rollDice());
