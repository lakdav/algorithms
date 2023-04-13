// (n) * (n - 1) * (n - 2) * (n - 3) * ... * 1
export function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}

export function iterativeFactorial(n) {
	let total = 1;
	for (let i = Math.abs(n); i > 1; i--) {
		total = total * i;
	}
	return total;
}
