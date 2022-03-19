/**
 * converts an integer number to binary
 * @param bin binary string of a number to be converted to integer
 * @returns integer value of the binary string
 */
export const int = (bin: string) => {
    const sign = bin[0] === '-' ? -1 : 1;
    let binary = sign < 0 ? bin.slice(1) : bin;
    binary = binary.slice(0, 2) === '0b' ? binary.slice(2) : binary;
    return parseInt(binary, 2) * sign;
};

/**
 * converts a binary number to integer
 * @param num integer number to be converted to binary
 * @returns the binary version of a specified integer
 */
export const bin = (num: number) => {
    const sign = num < 0 ? '-' : '';
    return sign + '0b' + (Math.abs(num) >>> 0).toString(2);
};
