"use strict"

const charRegex = require("char-regex")()

module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError("A string must be provided!")
	}

	if (input.length === 0) {
		return []
	}

	return [...input.match(charRegex)]
}
