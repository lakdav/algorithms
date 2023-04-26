export default class Sort {
	static bubbleSort_1(arr) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i; j++) {
				if (arr[j] > arr[j + 1]) {
					this.#swap(arr, j, j + 1);
				}
			}
		}
	}
	static bubbleSort(arr) {
		let swapped;
		do {
			swapped = false;
			for (let i = 0; i < arr.length - 1; i++) {
				if (arr[i] > arr[i + 1]) {
					this.#swap(arr, i, i + 1);
					swapped = true;
				}
			}
		} while (swapped);
	}
	static #swap(arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	static selectionSort(arr) {
		for (let i = 0; i < arr.length; i++) {
			let swappedIdx = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[swappedIdx]) {
					swappedIdx = j;
				}
			}
			this.#swap(arr, i, swappedIdx);
		}
	}
	static margeArays_ForSortedArrays(leftSortedArr, rightSortedArr) {
		const merge = [];
		let lIdx = 0;
		let rIdx = 0;
		while (lIdx < leftSortedArr.length && rIdx < rightSortedArr.length) {
			if (leftSortedArr[lIdx] < rightSortedArr[rIdx]) {
				merge.push(leftArr[lIdx++]);
			} else if (leftSortedArr[lIdx] > rightSortedArr[rIdx]) {
				merge.push(rightSortedArr[rIdx++]);
			} else {
				merge.push(leftSortedArr[lIdx++]);
				merge.push(rightSortedArr[rIdx++]);
			}
		}
		return [...merge, ...leftSortedArr, rightSortedArr];
	}
	static margeArays(leftSortedArr, rightSortedArr) {
		this.selectionSort(leftSortedArr);
		this.selectionSort(rightSortedArr);
		const merge = [];
		let lIdx = 0;
		let rIdx = 0;
		while (lIdx < leftSortedArr.length && rIdx < rightSortedArr.length) {
			if (leftSortedArr[lIdx] < rightSortedArr[rIdx]) {
				merge.push(leftSortedArr[lIdx++]);
			} else if (leftSortedArr[lIdx] > rightSortedArr[rIdx]) {
				merge.push(rightSortedArr[rIdx++]);
			} else {
				merge.push(leftSortedArr[lIdx++]);
				merge.push(rightSortedArr[rIdx++]);
			}
		}
		return [...merge, ...leftSortedArr, rightSortedArr];
	}
}
