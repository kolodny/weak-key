weak-key
===

Get a unique key for an object ( mainly for react's key={} )

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

### install

```bash
npm install --save weak-key
```

### usage

```js
var key = require('weak-key');
const todos = [{ text: 'write module' }, { text: 'writes tests' }, { text: 'publish' }];
todos.map(key); // ['weak-key-0', 'weak-key-1', 'weak-key-2'];
todos.reverse().map(key); // ['weak-key-2', 'weak-key-1', 'weak-key-0'];
[{}, {}].map(key); // ['weak-key-3', 'weak-key-4'];
```

This only works on things that `typeof thing === 'object'` so you can't use it on primitive types (numbers, strings, ...)
which makes it great to use for [React's `key={}`](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children)

### usage with react

```js
import key from 'weak-key';
export default function Todo(items) {
  return (
    <ul>
      {
        items.map(item =>
          <li key={key(item)}>{item.text}</li>
        )
      }
    </ul>
  );
}
```

[npm-image]: https://img.shields.io/npm/v/weak-key.svg?style=flat-square
[npm-url]: https://npmjs.org/package/weak-key
[travis-image]: https://img.shields.io/travis/kolodny/weak-key.svg?style=flat-square
[travis-url]: https://travis-ci.org/kolodny/weak-key
[coveralls-image]: https://img.shields.io/coveralls/kolodny/weak-key.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/kolodny/weak-key
[downloads-image]: http://img.shields.io/npm/dm/weak-key.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/weak-key
