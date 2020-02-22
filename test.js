const test = require("ava")
const splitChars = require(".")

test("main", (t) => {
	t.deepEqual(splitChars("🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪"), [
		"🏴󠁧󠁢󠁥󠁮󠁧󠁿", "❤️", "谢", "👪",
	])
})
