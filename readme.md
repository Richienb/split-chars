# split-chars

Split a string on each full character.

## Install

```sh
npm install split-chars
```

## Usage

```js
import splitChars from 'split-chars';

'🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪'.split('');
//=> ['�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '�', '❤', '️', '谢', '�', '�']

[...splitChars('🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪')];
//=> ['🏴󠁧󠁢󠁥󠁮󠁧󠁿', '❤️', '谢', '👪']
```

## API

### splitChars(input)

#### input

Type: `string`

The string to split.
