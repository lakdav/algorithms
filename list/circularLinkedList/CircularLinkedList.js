import LinkedList from '../linkedList/LinkedList.js';
import { Node } from '../node/Node.js';
import { defaultEquals } from '../utils/utils.js';

export default class CircularLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn);
	}
	insert(element, index) {
		const current = this.head;
		const node = new Node(element);
		if (this.isHead(index)) {
			if (this.isEmpty()) {
				this.head = node;
				node.next = this.head;
			} else {
				this.head = node;
				node.next = current;
				current.next = node;
			}
		} else {
			const previous = this.getElementAt(index - 1);
			if (!previous) {
				return false;
			}
			node.next = previous.next;
			previous.next = node;
		}
		this.count++;
		return true;
	}
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				if (this.size() === 1) {
					this.head = undefined;
				} else {
					const removed = this.head;
					current = this.getElementAt(this.size());
					this.head = this.head.next;
					current.next = this.head;
					current = removed;
				}
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current.element; // {6}
		}
		return undefined;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		const arr = [];
		let current = this.head;
		for (let i = 0; i < this.count; i++) {
			arr.push(current.element);
			current = current.next;
		}
		return arr.toString();
	}
}
