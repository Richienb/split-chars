const segmenter = new Intl.Segmenter();

export default function splitChars(input) {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return {
		* [Symbol.iterator]() {
			for (const {segment} of segmenter.segment(input)) {
				yield segment;
			}
		},
	};
}
