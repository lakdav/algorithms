export default class MoreSolution {
	static cartesians(arrA, arrb) {
		const r = [];
		for (let i = 0; i < arrA.length; i++) {
			for (let j = 0; j < arrb.length; j++) {
				r.push([arrA[i], arrb[j]]);
			}
		}
		return r;
	}
	static towerOfHanoi(n, a, b, c) {
		//O(2^n)
		if (n === 1) {
			console.log(`move disk 1 from ${a} to ${b}`);
			return;
		}
		this.towerOfHanoi(n - 1, a, c, b);
		console.log(`move disk ${n} from ${a} to ${b}`);
		this.towerOfHanoi(n - 1, c, b, a);
	}
}
