const l = () => Math.floor(Math.random() * 6) + 1; const t = (r = 1) => Array(r).fill(0).map(() => l()); export { l as rollDice, t as rollDices };
