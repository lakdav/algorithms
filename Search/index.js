export default class Search {
	static equil(target, source) {
		if (target === source) return 0;
		if (target > source) return 1;
		if (target < source) return -1;
	}
	static linearSearch(el, arr, callback = Search.equil) {
		//Big-O=O(n)
		for (let i = 0; i < arr.length; i++) {
			if (callback(el, arr[i]) === 0) {
				return i;
			}
		}
		return -1;
	}
	static binarySearch(el, arr, callback = Search.equil) {
		//Big-O=O(logn)
		let leftIdx = 0,
			rightIdx = arr.length - 1;
		while (leftIdx <= rightIdx) {
			let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
			if (callback(el, arr[middleIdx]) === 0) {
				return middleIdx;
			}
			if (callback(el, arr[middleIdx]) === -1) {
				rightIdx = middleIdx - 1;
			} else {
				leftIdx = middleIdx + 1;
			}
		}
		return -1;
	}
	static recursiveBinarySearch(el, arr, callback = Search.equil) {
		return Search.search(el, arr, 0, arr.length - 1, callback);
	}
	static search(target, arr, left, right, callback) {
		//Big-O=O(logn)
		if (left > right) {
			return -1;
		}
		let middle = Math.floor((left + right) / 2);
		if (callback(target, arr[middle]) === 0) {
			return middle;
		}
		if (callback(target, arr[middle]) === -1) {
			return Search.search(target, arr, left, middle - 1, callback);
		} else {
			return Search.search(target, arr, middle + 1, right, callback);
		}
	}
}
