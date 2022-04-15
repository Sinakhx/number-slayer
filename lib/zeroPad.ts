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
export const zeroPad = (num: number | string, int: number = 2, dec?: number, addSign?: boolean): string => {
    const number = +num;
    const numberStr = `${num}`;
    let sign = numberStr[0] === '-' || numberStr[0] === '+' ? numberStr[0] : '';
    if (number > 0) {
        if (addSign === true) sign = '+';
        if (addSign === false) sign = '';
    }
    const [intPart, decPart] = `${Math.abs(number)}`.split('.');
    const left = sign + intPart.padStart(int, '0');
    const decimal = dec ? `.${'0'.repeat(dec)}` : '';
    const right = decPart ? `.${decPart.padEnd(dec || decPart.length, '0')}` : decimal;
    return left + right;
};
