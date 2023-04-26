export default class Sort {
	static _compare(a, b) {
		if (a === b) return 0;
		if (a < b) return -1;
		if (a > b) return 1;
	}
	static setCompareFn(fn) {
		this._compare = fn;
	}
	/**
	 *
	 * @param {any[]} arr
	 */
	static bubbleSort(arr) {
		let swapped;
		do {
			swapped = false;
			for (let i = 0; i < arr.length - 1; i++) {
				if (this._compare(arr[i], arr[i + 1]) === 1) {
					let temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					swapped = true;
				}
			}
		} while (swapped);
	}
	static insertionSort(arr) {
		//O(n^2)
		for (let i = 1; i < arr.length; i++) {
			let NTI = arr[i];
			let j = i - 1;
			while (j >= 0 && this._compare(arr[j], NTI) === 1) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = NTI;
		}
	}
	static quickSort(arr) {
		if (arr.length < 2) {
			return arr;
		}
		let pivot = arr[arr.length - 1],
			left = [],
			right = [];
		for (let i = 0; i < arr.length - 1; i++) {
			if (this._compare(pivot, arr[i]) === 1) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return [...this.quickSort(left), pivot, ...this.quickSort(right)];
	}
	static mergeSort(arr) {
		if (arr.length < 2) return arr;
		let middle = Math.floor(arr.length / 2);
		let left = arr.slice(0, middle);
		let right = arr.slice(middle);
		return merge(this.mergeSort(left), this.mergeSort(right));
	}
}
function merge(leftArr, rightArr) {
	const sortArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortArr.push(leftArr.shift());
		} else {
			sortArr.push(rightArr.shift());
		}
	}
	return [...sortArr, ...leftArr, ...rightArr];
}
