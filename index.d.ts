/**
 * Split a string on each full character.
 * @param input The string to split.
 * @example
 * ```
 * const splitChars = require("split-chars");
 *
 * splitChars("🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪")
 * //=> [ "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "❤️", "谢", "👪" ]
 * ```
*/
declare function splitChars(input: string): string[]

export = splitChars
