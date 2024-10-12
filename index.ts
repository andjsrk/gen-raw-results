export function* rawResultsOf<Y, R, I>(iter: Iterator<Y, R, I>) {
	let input: I = undefined as I
	while (true) {
		const next = iter.next(input)
		input = yield next
		if (next.done) break
	}
}
