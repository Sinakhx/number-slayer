type NumbersDict = Readonly<Record<string, string>>;

// conversion without regex
const numbersFactory = () => {
    const faToEnDict: NumbersDict = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
    };
    const enToFaDict: NumbersDict = {
        0: '۰',
        1: '۱',
        2: '۲',
        3: '۳',
        4: '۴',
        5: '۵',
        6: '۶',
        7: '۷',
        8: '۸',
        9: '۹',
    };

    return {
        enToFaNumber: (num: number | string): string =>
            `${num}`
                .split('')
                .map((n) => enToFaDict[n] || n)
                .join(''),
        faToEnNumber: (num: number | string): string =>
            `${num}`
                .split('')
                .map((n) => faToEnDict[n] || n)
                .join(''),
    };
};

export const { enToFaNumber, faToEnNumber } = numbersFactory();

export const toFaPercent = (number: number | string): string => {
    const result = `٪ ${number >= 0 ? enToFaNumber(number) : `${enToFaNumber(Math.abs(+number))}-`}`;
    return result === '٪ -۰' ? '٪ ۰' : result;
};
