export const rollDice = (): number => Math.floor(Math.random() * 6) + 1;
export const rollDices = (count: number = 1): number[] => Array(count).fill(0).map(() => rollDice());
