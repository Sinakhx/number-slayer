/**
 * seperates a number with commas every three digits
 * @param number number to add commas to
 * @param delimiter delimiter to use between each group of digits (comma type)
 * @returns a comma separated number
 */
export const addCommasToNumber = (number: number | string, delimiter: string = ','): string => {
    const numberString = `${number}`;
    const x = numberString.split('.');
    let integer = x[0];
    const decimals = x.length > 1 ? `.${x[1]}` : '';
    const pattern = /(\d+)(\d{3})/;
    while (pattern.test(integer)) {
        integer = integer.replace(pattern, `$1${delimiter}$2`);
    }
    return integer + decimals;
};
