export default class NumberSolution {
	static revesreInt(n) {
		if (-10 < n && n < 10) {
			return n;
		}
		let nStr = n.toString().replace(/0{1,}$/, '');
		let reverse = '';
		for (let i = nStr.length - 1; i >= 0; i--) {
			reverse += nStr[i];
		}
		if (n < 0) return parseInt(reverse) * -1;
		else return parseInt(reverse);
	}
}
