import { defaultEquals } from '../utils/utils.js';
import { Node } from '../node/Node.js';
export default class LinkedList {
	#head;
	#count;
	#equalsFn;
	constructor(equalsFn = defaultEquals) {
		this.#count = 0;
		this.#head = null;
		this.#equalsFn = equalsFn;
	}
	push(element) {
		const node = new Node(element);
		if (this.isEmpty()) {
			this.#head = node;
		} else {
			let current = this.#head;
			while (current.next != undefined) {
				current = current.next;
			}
			current.next = node;
		}
		this.#count++;
	}
	removeAt(index) {
		let current = this.#head;
		if (this.isHead(index)) {
			this.#head = current.next;
		} else {
			const previous = this.getElementAt(index - 1);
			if (!previous) {
				return previous;
			}
			current = previous.next;
			previous.next = current.next;
		}
		this.count--;
		return current.element;
	}
	insert(element, index) {
		const node = new Node(element);
		if (this.isHead(index)) {
			node.next = this.#head;
			this.#head = node;
		} else {
			const previous = this.getElementAt(index - 1);
			if (!previous) {
				return false;
			}
			const current = previous.next;
			node.next = current;
			previous.next = node;
		}
		this.count++;
	}
	indexOf(element) {
		let result = -1;
		if (this.isEmpty()) {
			return result;
		}
		let index = 0;
		let current = this.#head;
		while (current != null) {
			if (this.#equalsFn(element, current.element)) {
				return (result = index);
			}
			current = current.next;
			index++;
		}
		return result;
	}
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}
	getElementAt(index) {
		if (this.isInRange(index)) {
			let node = this.#head;
			for (let i = 0; i < index && node != null; i++) {
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
	isHead(index) {
		return index === 0;
	}
	isInRange(index) {
		return index >= 0 && index <= this.#count;
	}
	size() {
		return this.#count;
	}
	isEmpty() {
		return this.size() === 0;
	}
	getHead() {
		return this.#head;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		const arr = [];
		let current = this.#head;
		while (current !== null) {
			arr.push(current.element);
			current = current.next;
		}
		return arr.toString();
	}
}
