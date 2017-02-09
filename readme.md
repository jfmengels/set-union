# set-union [![Build Status](https://travis-ci.org/jfmengels/set-union.svg?branch=master)](https://travis-ci.org/jfmengels/set-union)

> Creates a new Set from the union of two Sets or arrays


## Install

```
$ npm install --save set-union
```


## Usage

```js
const union = require('set-union');

union(new Set([1, 2, 3]), new Set([2, 3, 4]));
// => Set { 1, 2, 3, 4 }

union([1, 2, 3], [2, 3, 4]);
// => Set { 1, 2, 3, 4 }
```


## API

### union(set1, set2)

Will return a new Set containing the elements contained in both `set1` and `set2`. `set1` and `set2` must be Iterables, like arrays and `Set`s are.

## License

MIT © [Jeroen Engels](https://github.com/jfmengels)
