/**
 * splits a float into a whole number and a fractional part
 * @param num number to split into integer and decimal parts
 * @returns an array of [integer, decimal]
 */
export const split = (num: number) => {
    const abs = Math.abs(num);
    const sign = Math.sign(num);
    const floor = Math.floor(abs);
    const int = floor * sign || 0;
    const float = (abs - floor) * sign || 0;
    return [int, float];
};
