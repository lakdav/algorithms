import { DoublyLinkedList } from '../list/index.js';

export default class StackLinkedList {
	constructor() {
		this.items = new DoublyLinkedList();
	}
	push(element) {
		this.items.push(element);
	}
	pop() {
		if (this.items.isEmpty()) {
			return undefined;
		}
		return this.items.removeAt(this.items.size() - 1);
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items.getElementAt(this.size() - 1).element;
	}
	isEmpty() {
		return this.items.isEmpty();
	}
	size() {
		return this.items.size();
	}
	clear() {
		this.items.clear();
	}
	toString() {
		return this.items.toString();
	}
}
