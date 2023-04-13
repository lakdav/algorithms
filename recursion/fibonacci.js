export function fibonacci() {
	if (n < 1) return 0;
	if (n <= 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
export function iterativeFibonacci(n) {
	if (n < 1) return 0;
	if (n <= 2) return 1;
	let prev = 1;
	let prevprev = 0;
	let fib = n;
	for (let i = 2; i <= n; i++) {
		fib = prev + prevprev;
		prevprev = prev;
		prev = fib;
	}
	return fib;
}
export function fibonacciMemoization(n) {
	const memo = [0, 1]; // {1}
	const fibonacci = (n) => {
		if (memo[n] != null) return memo[n]; // {2}
		return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
	};
	return fibonacci;
}
