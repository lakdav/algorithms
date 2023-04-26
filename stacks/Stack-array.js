export default class StackArray {
	#items;
	constructor() {
		this.#items = [];
	}
	push(element) {
		this.#items.push(element);
	}
	pop() {
		return this.#items.pop();
	}
	peek() {
		return this.#items[this.#items.length - 1];
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.#items.length;
	}
	clear() {
		this.#items = [];
	}
	toString() {
		return this.#items.toString();
	}
	print() {
		console.log(this.toString());
	}
}
