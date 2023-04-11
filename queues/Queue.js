export default class Queue {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}
	enqueue(element) {
		this.items[this.count++] = element;
	}
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount++];
		return result;
	}
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.count - this.lowestCount;
	}
	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		return Object.values(this.items).toString();
	}
}
