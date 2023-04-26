export const isPowerOfTow = (n) => {
	if (n < 1) return false;
	while (n > 1) {
		if (n % 2 !== 0) {
			console.log(n);
			return false;
		}
		n = n / 2;
	}
	return true;
};
export const isPowerOfTowBitWise = (n) => {
	if (n < 1) return false;
	return (n & (n - 1)) === 0;
};
export const isPowerOfThree = (n) => {
	if (n < 1) return false;
	while (n > 1) {
		if (n % 3 !== 0) {
			console.log(n);
			return false;
		}
		n = n / 3;
	}
	return true;
};
