// conversion without regex
const numbersFactory = () => {
    const numbers = (l: number) =>
        Object.fromEntries(
            Array(10)
                .fill(0)
                .map((_, i) => {
                    const j = i + '';
                    const p = String.fromCharCode(j.charCodeAt(0) + 1728);
                    return l === 0 ? [j, p] : [p, j];
                }),
        );
    const faToEnDict: Record<string, string> = numbers(1);
    const enToFaDict: Record<string, string> = numbers(0);

    const convert =
        (dict: Record<string, string>) =>
        (num: number | string): string =>
            `${num}`
                .split('')
                .map((n) => dict[n] || n)
                .join('');

    return {
        enToFaNumber: convert(enToFaDict),
        faToEnNumber: convert(faToEnDict),
    };
};

export const { enToFaNumber, faToEnNumber } = numbersFactory();

export const toFaPercent = (number: number | string): string => {
    const p = '٪ ';
    const result = number >= 0 ? enToFaNumber(number) : enToFaNumber(Math.abs(+number)) + '-';
    return result === '-۰' ? p + '۰' : p + result;
};
