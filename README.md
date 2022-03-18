# number-slayer

## About

This is a very tiny (~1kb) number-utilities library designed for TypeScript and JavaScript projects. It is a collection of functions that are used to perform common daily tasks with numbers, including numbers generation (both random and non-random), rounding to a specific number of decimal places, converting numbers to formatted strings, etc.

### number-slayer:
- has no dependencies
- is written in TypeScript
- is lightweight (< 1kb gzipped)
- supports both ESM and CJS outputs
- is compatible with both Node.js and browsers
- is modular, functional, tree-shakable and easy to use
- is developed by TDD approach and is fully tested and documented
## Installation

```sh
    npm install number-slayer
    # or
    yarn add number-slayer
```

## Usage

```ts
    import { addCommasToNumber } from 'number-slayer';

    const number = 1234567890;
    const formattedNumber = addCommasToNumber(number);
    console.log(formattedNumber); // '1,234,567,890'
```


