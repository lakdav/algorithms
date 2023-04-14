export const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
};
export default function defaultCompare(a, b) {
	if (a === b) {
		return 0;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
export const reverseCompare = (compareFn) => {
	return (a, b) => compareFn(b, a);
};
