/**
 * splits a float into a whole number and a fractional part
 * @param num number to split into integer and decimal parts
 * @returns an array of [integer, decimal]
 */
export const split = (num: number) => {
    const numStr = +num + '';
    const sign = numStr[0] === '-' ? '-' : '';
    let [int, dec] = numStr.split('.');
    if (+int < 1 && +int > -1 && +int !== 0) {
        dec = int;
        int = '0';
    } else {
        dec = sign + '0.' + dec;
    }
    return [int, dec].map((x) => +x || 0);
};
