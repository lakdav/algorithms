export const fibonacciLoop = (n) => {
	if (n < 1) return 0;
	if (n <= 2) return 1;
	let prev = 1;
	let prevprev = 1;
	let fib = 0;
	for (let i = 2; i <= n; i++) {
		fib += prev + prevprev;
		prevprev = prev;
		prev = i;
	}
	return fib;
};
export const fibonacciLoopArr = (n) => {
	if (n < 1) {
		return {
			result: 0,
			arr: [],
		};
	}
	let r;
	let fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	r = fib[fib.length - 1];
	if (n <= 2) {
		r = 1;
	}
	return {
		result: r,
		arr: fib,
	};
};
