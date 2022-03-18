/**
 * padds a number with zeros (can be used for both the integer and decimal parts)
 * @param num actual number to be padded with zeros
 * @param int length of the desired string for the integer part of the number (defaults to 2)
 * @param dec length of the desired string for the decimal part of the number
 * @returns a string representation of the number with beggining &/or ending zeros
 */
export const zeroPad = (num: number | string, int: number = 2, dec?: number): string => {
    let number = `${num}`;
    const sign = number[0] === '-' || number[0] === '+' ? number[0] : '';
    if (sign) {
        number = number.substring(1);
    }
    const [intPart, decPart] = number.split('.');
    const left = sign + intPart.padStart(int, '0');
    const right = decPart ? `.${decPart.padEnd(dec || decPart.length, '0')}` : '';

    return left + right;
};
