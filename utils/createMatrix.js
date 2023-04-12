import { Queue } from '../queues/index.js';

export default function createShiftMatrix(arr) {
	const queue = new Queue();
	let l = arr.length;
	arr.forEach((x) => {
		queue.enqueue(x);
	});
	console.log(queue.toString(), arr);
	const matrix = Array.from(arr, () => {
		const subArr = [];
		for (let i = 0; i < l; i++) {
			subArr.push(queue.peek());
			queue.enqueue(queue.dequeue());
		}

		queue.enqueue(queue.dequeue());

		return subArr;
	});
	return matrix;
}
