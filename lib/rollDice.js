export const rollDice = () => Math.floor(Math.random() * 6) + 1;
export const rollDices = (count = 1) => Array(count).fill(0).map(() => rollDice());
