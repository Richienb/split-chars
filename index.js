const Segmenter = Intl.Segmenter ?? await (await import("intl-segmenter-polyfill/dist/bundled.js")).createIntlSegmenterPolyfill()

const segmenter = new Segmenter("en", { granularity: "grapheme" })

export default input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	return segmenter.segment(input).map(({segment}) => segment)
}
