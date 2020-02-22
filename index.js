"use strict"

const charRegex = require("char-regex")()

module.exports = (input) => typeof input === "string" ? input.match(charRegex) || [] : []
