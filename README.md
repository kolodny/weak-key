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
