/**
Split a string on each full character.

@param input The string to split.

@example
```
import splitChars from 'split-chars';

[...splitChars('🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪')];
//=> ['🏴󠁧󠁢󠁥󠁮󠁧󠁿', '❤️', '谢', '👪']
```
*/
export default function splitChars(input: string): Iterable<string>;
