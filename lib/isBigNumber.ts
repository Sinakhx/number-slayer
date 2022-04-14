// checks if the number is out of +-MAX_SAFE_INTEGER bounds
export const isBigNumber = (num: number) => num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER;
