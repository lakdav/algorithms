import { defaultCompare, reverseCompare } from '../utils/index.js';

import MinHeap from './MinHeap.js';

export default class MaxHeap extends MinHeap {
	constructor(compareFn = defaultCompare) {
		super(compareFn);
		this.compareFn = reverseCompare(compareFn);
	}
	findMaximum() {
		return this.findMinimum();
	}
}
