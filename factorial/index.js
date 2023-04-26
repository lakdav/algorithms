export const factorialLoop = (n) => {
	let total = 1;
	let arr = [];
	for (let i = n; i > 1; i--) {
		total *= i;
		arr.push(total);
	}
	return [total, arr];
};
