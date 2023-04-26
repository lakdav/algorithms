export default class ArraySolution {
	/**
	 *
	 * @param {[]} matrix
	 */
	static rotateImage(matrix) {
		matrix.reverse();
		for (let row = 0; row < matrix.length; row++) {
			for (let col = 0; col < matrix[0].length; col++) {
				if (row < col) {
					const temp = matrix[row][col];
					matrix[row][col] = matrix[col][row];
					matrix[col][row] = temp;
				}
			}
		}
	}
	static indexOf(arr, val) {
		for (let i = 0; i < arr.length; i++) {
			if (val === arr[i]) {
				return i;
			}
		}
		return -1;
	}
	static includes(arr, val) {
		for (let i = 0; i < arr.length; i++) {
			if (val === arr[i]) {
				return true;
			}
		}
		return false;
	}
	static find(arr, val) {
		for (let i = 0; i < arr.length; i++) {
			if (val === arr[i]) {
				return arr[i];
			}
		}
		return null;
	}
	static binarySearch(arr, val) {
		let leftIdx = 0;
		let rightIdx = arr.length - 1;
		while (leftIdx <= rightIdx) {
			let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
			if (arr[middleIdx] === val) {
				return middleIdx;
			}
			if (val < arr[middleIdx]) {
				rightIdx = middleIdx - 1;
			} else {
				leftIdx = middleIdx + 1;
			}
		}
		return -1;
	}
}
