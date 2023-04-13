export function recursion(fn, condition, state) {
	if (condition.i === state) return;
	condition.i++;
	fn();
	recursion(fn, condition, state);
}
