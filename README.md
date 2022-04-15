# **number-slayer**
![npm](https://img.shields.io/npm/v/number-slayer?color=%23b8860b&style=flat-square)
![license](https://img.shields.io/npm/l/number-slayer?color=red&style=flat-square)
![tests](https://img.shields.io/badge/tests-100%25-green?style=flat-square)
![types](https://img.shields.io/npm/types/number-slayer?style=flat-square)


## **At a glance**
```js
    range(7, 22, 3)                   // -->   [7, 10, 13, 16, 19]
    toPrecision(3.141592653589793, 3) // -->   3.142
    zeroPad(4, 2, 3)                  // -->   '04.000'
    randomInt(79, 83)                 // -->   82
    addCommasToNumber(-43000000.25)   // -->   '-43,000,000.25'
    roundThousands(27743000.21)       // -->   30000000
    countIntDigits(123456789)         // -->   9
    enToFaNumber(1234567890)          // -->   '۱۲۳۴۵۶۷۸۹۰'
    isNumber(98.3)                    // -->   true
    modulus(-5, 3)                    // -->   1
    toFaPercent(47)                   // -->   '٪ ۴۷'
    bin(-36)                          // -->   '-0b100100'
    int('-0b100100')                  // -->   -36
    // ...
```


## **About**

This is a very tiny tree-shakable number-utilities library designed for TypeScript and JavaScript projects. It is a collection of functions that are used to perform common daily tasks with numbers, including numbers generation (both random and non-random), rounding to a specific number of decimal places, converting numbers to formatted strings, etc.

### **number-slayer**:
- has no dependencies
- is written in TypeScript
- is lightweight (<2kb gzipped)
- supports both ESM and CJS outputs
- is compatible with both Node.js and browsers
- is modular, functional, tree-shakable and easy to use
- is developed by TDD approach and is fully tested and documented
## **Installation**

```sh
    npm install number-slayer
    # or
    yarn add number-slayer
```

## **Usage**

```ts
    import { addCommasToNumber } from 'number-slayer';
    // or if you are using commonjs:
    // const addCommasToNumber = require('number-slayer/dist/index.cjs').addCommasToNumber;

    const number = addCommasToNumber(1234567890);
    console.log(number); // -->   '1,234,567,890'
```

## **Quick Guide**
- [addCommasToNumber](#addcommastonumber) - seperates a number by every 3 digits
- [countIntDigits](#countintdigits) - returns the number of digits in the integer part of a number
- [countWithZeros](#countwithzeros) - returns 1 if the argument is number or truthy
- [isBigNumber](#isbignumber) - returns true if the argument number out of the bounds of +-Number.MAX_SAFE_INTEGER
- [isNumber](#isnumber) - returns true if the argument is a real number
- [modulus](#modulus) - returns the positive remainder of a division
- [randomInt](#randomint) - returns a random integer between (& including) two numbers
- [range](#range) - creates a list of numbers from a start to an end with a step
- [roundThousands](#roundthousands) - rounds a real number to a certain multiple of 10
- [toPrecision](#toprecision) - rounds a number to a specific number of decimal places
- [zeroPad](#zeropad) - pads a number with leading or trailing zeros of a specific length
- ***Binary conversion utils***
    + [int](#int) - converts a binary number to integer
    + [bin](#bin) - converts an integer number to binary
- ***Persian language helper utils*** - number helper utils for the Persian language
    + [faToEnNumber](#fatoennumber) - converts a Persian number to English `(e.g. '۱۲۳' to '123')`
    + [enToFaNumber](#entofanumber) - converts an English number to Persian `(e.g. '123' to '۱۲۳')`
    + [toFaPercent](#tofapercent) - converts a number to Persian percent `(e.g. '50' to '٪ ۵۰')`
- ***Fun utils***
    + [rollDice](#rolldice) - returns a random dice number 🎲
    + [rollMultipleDices](#rollmultipledices) - returns a series of random dice numbers 🎲🎲🎲🎲

## Detailed Examples

### **addCommasToNumber**

seperates the integer part of a number with commas every three digits. the delimiter can be defined as a custom string as well.

```ts
    import { addCommasToNumber } from 'number-slayer';

    const n1 = addCommasToNumber(1234567890)    // -> "1,234,567,890"
    const n2 = addCommasToNumber(-5589.43, "'") // -> "-5'589.43"
```

**[⬆ back to top](#quick-guide)**

### **countIntDigits**

returns the number of digits in the integer part of a number

```ts
    import { countIntDigits } from 'number-slayer';

    const n = countIntDigits(-198989.999);
    console.log(n);   // -> 6
```

**[⬆ back to top](#quick-guide)**

### **countWithZeros**

can be used as a callback function when trying to count digits and truthy values in an array (counts zero as well).
the return value of this function is either 1 or 0;

```ts
    import { countWithZeros } from 'number-slayer';

    const mixedArray = [null, undefined, 0, "0", 6, "345", "-12", ""];
    const passList = mixedArray.filter(countWithZeros); // -> [0, "0", 6, "345", "-12"]
    console.log(passList.length); // 5
```

**[⬆ back to top](#quick-guide)**

### **isBigNumber**

checks if the number is out of +-MAX_SAFE_INTEGER bounds. returns true if the argument number is too big for calculations.

```ts
    import { isBigNumber } from 'number-slayer';

    isBigNumber(Number.MIN_SAFE_INTEGER - 1); // -> true
    isBigNumber(9100000000000000);            // -> true
```

**[⬆ back to top](#quick-guide)**

### **isNumber**

checks if the given argument is a real number. returns true if the argument is a real number, false otherwise.

```ts
    import { isNumber } from 'number-slayer';

    console.log(isNumber({})); // false
    console.log(isNumber(-1.1)); // true
    console.log(isNumber(undefined)); // false
    console.log(isNumber(1 / Math.sqrt(Math.PI))); // true
```

**[⬆ back to top](#quick-guide)**

### **modulus**

returns the positive remainder of a division, no matter the sign of the dividend.

```ts
    import { modulus } from 'number-slayer';

    const simpleModulus = -5 % 3;                // -> -2
    const numberSlayerModulus = modulus(-5, 3);  // ->  1
    // 1 is the same as -2 + 3
```

**[⬆ back to top](#quick-guide)**

### **randomInt**

returns a random integer number between (and including) the given `min` & `max` values

```ts
    import { randomInt } from 'number-slayer';

    console.log(randomInt(1, 10)); // random number between 1 and 10. e.g. 5
    console.log(randomInt(10, 1)); // is the same as randomInt(1, 10)
```

**[⬆ back to top](#quick-guide)**

### **range**

creates an array of numbers from the starting number up to the ending number (exclusive) with arbitrary step (default is 1).

```ts
    import { range } from 'number-slayer';

    const numbers = range(3, 10);     //-> [3, 4, 5, 6, 7, 8, 9]
    const numbers2 = range(25, 32, 2); //-> [25, 27, 29, 31]
```

**[⬆ back to top](#quick-guide)**

### **roundThousands**

rounds a real number to a certain multiple of 10.
it takes three arguements:
 - `num` ***(required)*** number to be rounded
 - `precision` ***(optional. default: 1)*** number of digits from left not to be rounded/floored/ceild
 - `format` ***(optional. default: "round")*** number-cutting strategy. can be: `"round" | "floor" | "ceil"
`
```ts
    import { roundThousands } from 'number-slayer';

    roundThousands(1462621.12158);             // -> 1000000
    roundThousands(1462621.12158, 3, 'ceil');  // -> 1470000
```

**[⬆ back to top](#quick-guide)**

### **toPrecision**

rounds a number to the given precision decimals.
also returns non-numeric values as they are without returning `NaN` stuff or throwing errors.

```ts
    import { toPrecision } from 'number-slayer';

    console.log(toPrecision('foo')); // 'foo'
    console.log(toPrecision(5.2341)); // 5.2341
    console.log(toPrecision(48.23416789, 3)); // 48.234
```

> **NOTE:** JavaScript has a similar method: [toPrecision](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision), which doesn't work like this.

**[⬆ back to top](#quick-guide)**

### **zeroPad**

pads a number with leading or trailing zeros of a specific length (can be used for both the integer and decimal parts).

*arguments*:
- `num` ***(required)*** number to be padded
- `int` ***(optional)*** length of the desired string for the **integer part** of the number `(defaults to 2)`
- `dec` ***(optional)*** length of the desired string for the **decimal part** of the number
- `addSign` ***(optional)*** if true, the **positive sign** of the number will also be added to the beginning of the resulting string
    + if the argument number is a positive signed number-string, the sign will be added to the beginning of the resulting string (default behavior)
    + **NOTE**: the negative sign will be added regardless of the value of this argument

```ts
    import { zeroPad } from 'number-slayer';
    
    console.log(zeroPad(1)); // '01'
    console.log(zeroPad(1, 3)); // '001'
    console.log(zeroPad(1, 3, 2)); // '001.00'
    console.log(zeroPad(-47.8, 3, 2)); // '-047.80'
    console.log(zeroPad('+47.8', 3, 2)); // '+047.80'
    console.log(zeroPad(47.8, 3, 2)); // '047.80'
    console.log(zeroPad(47.8, 3, 2, true)); // '+047.80'
```

**[⬆ back to top](#quick-guide)**

### Binary conversion utils

### **int**

converts a binary number to integer. 👇🏻
### **bin**

converts an integer number to binary (the result will always start with the prefix `0b`. this is similar to Python's `bin` function).

```ts
    import { int, bin } from 'number-slayer';

    console.log(int('100100')); // 36
    console.log(int('0b100100')); // 36
    console.log(bin(36)); // '0b100100'
    console.log(bin(-36)); // '-0b100100'
```

**[⬆ back to top](#quick-guide)**

### Persian language helper utils

### **faToEnNumber**
converts a Persian number to English (ignores non-numeric characters).

```ts
    import { faToEnNumber } from 'number-slayer';

    console.log(faToEnNumber('۱۲۳۴۵۶۷۸۹۰')); // '1234567890'
    console.log(faToEnNumber('He knows -25.48 is -۲۵.۴۸')); // 'He knows -25.48 is -25.48'
```

**[⬆ back to top](#quick-guide)**

### **enToFaNumber**
converts an English number to Persian (ignores non-numeric characters).

```ts
    import { enToFaNumber } from 'number-slayer';

    console.log(enToFaNumber(-123.66)); // '-۱۲۳.۶۶'
    console.log(enToFaNumber('مبلغ 25000 تومان')); // 'مبلغ ۲۵۰۰۰ تومان'
```

**[⬆ back to top](#quick-guide)**

### **toFaPercent**
converts a number to Persian percent.

```ts
    import { toFaPercent } from 'number-slayer';

    console.log(toFaPercent(50)); // '٪ ۵۰'
```

**[⬆ back to top](#quick-guide)**


### Fun utils

### **rollDice**

returns a random 🎲 number (`1` to `6`) 👇🏻
### **rollMultipleDices**

returns an array of random dice numbers 🎲🎲🎲🎲🎲... (takes the number of dices as an argument)

```ts
    import { rollDice, rollMultipleDices } from 'number-slayer';

    console.log(rollDice()); // a random dice number: e.g. 6
    console.log(rollMultipleDices(4)); // a list of random dice numbers: e.g. [4, 1, 6, 3]
```

**[⬆ back to top](#quick-guide)**

____________________________________
### **Want More Examples?**
see the [tests folder][tests-url] for more detailed examples.

____________________________________
### **Contributing**
Please feel free to open an issue or create a pull request to add a new feature or fix a bug. (see [contributing][contribution-url] for more details)

____________________________________

## **License**

The [MIT License][license-url] (MIT)

&copy; (2021 - Present) Sina Khodabandehloo

[tests-url]: https://github.com/Sinakhx/number-slayer/tree/main/__tests__/
[contribution-url]:  https://github.com/Sinakhx/number-slayer/blob/main/CONTRIBUTING.md
[changelog-url]:  https://github.com/Sinakhx/number-slayer/blob/main/CHANGELOG.md
[license-url]:  https://github.com/Sinakhx/number-slayer/blob/main/LICENSE