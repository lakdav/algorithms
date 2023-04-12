import LinkedList from '../linkedList/LinkedList.js';
import { DoublyNode } from '../node/Node.js';
import { defaultEquals } from '../utils/utils.js';

export default class doublyLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn);
		this.tail = undefined;
	}
	insert(element, index = this.count) {
		const node = new DoublyNode(element);
		if (this.isHead(index)) {
			if (this.isEmpty()) {
				this.head = node;
				this.tail = node;
			} else {
				node.next = this.head;
				this.head.prev = node;
				this.head = node.next;
			}
		} else if (index === this.count) {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		} else {
			const previous = this.getElementAt(index - 1);
			if (!previous) {
				return false;
			}
			let current = previous.next;
			node.next = current;
			previous.next = node;
			current.prev = node;
			node.prev = previous;
		}
		this.count++;
		return true;
	}
	removeAt(index) {
		let current = this.head;
		if (this.isHead(index)) {
			this.head = current.next;
			if (this.size() === 1) {
				this.tail = undefined;
			} else {
				this.head.prev = undefined;
			}
		} else if (index === this.size() - 1) {
			current = this.tail;
			this.tail = current.prev;
			this.tail.next = null;
		} else {
			current = this.getElementAt(index);
			const previous = current.prev;
			previous.next = current.next;
			current.next.prev = previous;
		}
		this.count--;
		return current.element;
	}
}
