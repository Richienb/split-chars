# split-chars [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/split-chars/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/split-chars)

Split a string on each full character.

[![NPM Badge](https://nodei.co/npm/split-chars.png)](https://npmjs.com/package/split-chars)

## Install

```sh
npm install split-chars
```

## Usage

```js
import splitChars from "split-chars"

"🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪".split("")
//=> [ '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '❤', '️', '谢', '�', '�' ]

splitChars("🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪")
//=> [ "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "❤️", "谢", "👪" ]
```

## API

### splitChars(input)

#### input

Type: `string`

The string to split.
