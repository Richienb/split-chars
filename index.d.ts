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
declare function splitChars<T>(input: T): T extends string ? string[] : []

export = splitChars
