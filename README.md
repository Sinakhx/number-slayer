# **number-slayer**

## **About**

This is a very tiny (~1kb) number-utilities library designed for TypeScript and JavaScript projects. It is a collection of functions that are used to perform common daily tasks with numbers, including numbers generation (both random and non-random), rounding to a specific number of decimal places, converting numbers to formatted strings, etc.

### **number-slayer**:
- has no dependencies
- is written in TypeScript
- is lightweight (< 1kb gzipped)
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

    const number = 1234567890;
    const formattedNumber = addCommasToNumber(number);
    console.log(formattedNumber); // '1,234,567,890'
```

## **Utils**
- [addCommasToNumber](#addcommastonumber) - seperates a number by every 3 digits
- [countWithZeros](#countwithzeros) - returns 1 if is number or truthy
- [isNumber](#isnumber) - returns true if the argument is a real number
- [modulus](#modulus) - returns the positive remainder of a division

## Detailed Examples

### **addCommasToNumber**

seperates the integer part of a number with commas every three digits. the delimiter can be defined as a custom string as well.

```ts
    import { addCommasToNumber } from 'number-slayer';

    const n1 = addCommasToNumber(1234567890)    // -> "1,234,567,890"
    const n2 = addCommasToNumber(-5589.43, "'") // -> "-5'589.43"
```

**[⬆ back to top](#utils)**

### **countWithZeros**

can be used as a callback function when trying to count digits and truthy values in an array (counts zero as well).
the return value of this function is either 1 or 0;

```ts
    import { countWithZeros } from 'number-slayer';

    const myArray = [null, undefined, 0, "0", 6, "345", "-12", ""];
    const count = myArray.reduce(countWithZeros, 0);
    console.log(count); // 5
    // the 5 values counted are: 0, "0", 6, "345", "-12"
```

**[⬆ back to top](#utils)**


### **isNumber**

checks if the given argument is a real number. returns true if the argument is a real number, false otherwise.

```ts
    import { isNumber } from 'number-slayer';

    console.log(isNumber({})); // false
    console.log(isNumber(-1.1)); // true
    console.log(isNumber(undefined)); // false
    console.log(isNumber(1 / Math.sqrt(Math.PI))); // true
```

**[⬆ back to top](#utils)**

### **modulus**

returns the positive remainder of a division, no matter the sign of the dividend.

```ts
    import { modulus } from 'number-slayer';

    const simpleModulus = -5 % 3;                // -> -2
    const numberSlayerModulus = modulus(-5, 3);  // ->  1
    // 1 is the same as -2 + 3
```

**[⬆ back to top](#utils)**

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

[tests-url]: https://github.com/Sinakhx/number-slayer/tree/main/__tests__ss
[contribution-url]:  https://github.com/Sinakhx/number-slayer/blob/main/CONTRIBUTING.md
[changelog-url]:  https://github.com/Sinakhx/number-slayer/blob/main/CHANGELOG.md
[license-url]:  https://github.com/Sinakhx/number-slayer/blob/main/LICENSE