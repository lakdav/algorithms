import { defaultEquals } from '../utils/utils.js';
import { Node as linkNode } from '../node/Node.js';
export default class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0;
		this.head = null;
		this.equalsFn = equalsFn;
	}
	push(element) {
		const node = new linkNode(element);
		let current = this.head;
		if (this.isEmpty()) {
			this.head = node;
		} else {
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}
	removeAt(index) {
		let current = this.head;
		if (this.isHead(index)) {
			this.head = current.next;
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
	insert(element, index = 0) {
		if (this.isHead(index)) {
			this.prepend(element);
		} else {
			const node = new linkNode(element);
			const previous = this.getElementAt(index - 1);
			if (!previous) {
				return false;
			}
			const current = previous.next;
			node.next = current;
			previous.next = node;
			this.count++;
		}
	}
	prepend(element) {
		const node = new linkNode(element);
		node.next = this.head;
		this.head = node;
		this.count++;
	}
	getHead() {
		return this.head;
	}
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count && current != null; i++) {
			if (this.equalsFn(element, current.element)) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}
	getElementAt(index) {
		if (this.isInRange(index)) {
			let node = this.head;
			for (let i = 0; i < index && node != null; i++) {
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
	reverse() {
		let current = this.head;
		let head = new linkNode(current.element);
		while (current.next) {
			const before = new linkNode(current.next.element);
			before.next = head;
			head = before;
			current = current.next;
		}
		this.head = head;
	}
	isHead(index) {
		return index === 0;
	}
	isInRange(index) {
		return index >= 0 && index <= this.count;
	}
	size() {
		return this.count;
	}
	isEmpty() {
		return this.size() === 0;
	}
	getHead() {
		return this.head;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		const arr = [];
		let current = this.head;
		while (current != null) {
			arr.push(current.element);
			current = current.next;
		}
		return arr.toString();
	}
}
