import {expectType} from "tsd"
import splitChars from "./index.js"

expectType<string[]>(splitChars("🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪"))
