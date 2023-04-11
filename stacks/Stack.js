export default class stack {
	#items;
	#count;
	constructor() {
		this.#items = {};
		this.#count = 0;
	}
	push(element) {
		this.#items[this.#count] = element;
		this.#count++;
	}
	pop() {
		if (this.isEmpty()) return undefined;
		this.#count--;
		const result = this.#items[this.#count];
		delete this.#items[this.#count];
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
