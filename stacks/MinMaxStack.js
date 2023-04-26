export default class MinMaxStack {
	#items;
	#count;
	#min;
	#max;
	constructor() {
		this.#items = {};
		this.#count = 0;
		this.#min = 0;
		this.#max = 0;
	}
	push(element) {
		this.#items[this.#count] = element;
		this.validate(element);
		this.#count++;
	}
	validate(element) {
		if (this.isEmpty()) {
			this.#max = 0;
			this.#min = 0;
		} else {
			if (element < this.#items[this.#min]) {
				this.#min = this.#count;
			}
			if (element > this.#items[this.#max]) {
				this.#max = this.#count;
			}
		}
	}
	min() {
		return this.#items[this.#min];
	}
	max() {
		return this.#items[this.#max];
	}
	pop() {
		if (this.isEmpty()) return undefined;
		this.#count--;
		const result = this.#items[this.#count];
		delete this.#items[this.#count];
		if (this.#count == this.#min && !this.isEmpty()) {
			this.#min = Object.entries(this.#items).reduce((prev, next) => {
				return prev[1] <= next[1] ? prev : next;
			})[0];
		}
		if (this.#count == this.#max && !this.isEmpty()) {
			this.#min = Object.entries(this.#items).reduce((prev, next) => {
				return prev[1] >= next[1] ? prev : next;
			})[0];
		}
		if (this.isEmpty()) {
			this.#max = 0;
			this.#min = 0;
		}
		return result;
	}
	isEmpty() {
		return this.#count === 0;
	}
	size() {
		return this.#count;
	}
	peek() {
		if (this.isEmpty()) return undefined;
		return this.#items[this.#count - 1];
	}
	clear() {
		this.#items = {};
		this.#count = 0;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		return Object.values(this.#items).toString();
	}
}
