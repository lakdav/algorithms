export class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}
export class DoublyNode extends Node {
	constructor(element) {
		super(element);
		this.prev = null;
	}
}
