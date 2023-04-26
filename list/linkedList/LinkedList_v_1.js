class _Node {
	constructor(data, next, prev) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}
export default class linkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	unShift(data) {
		const node = new _Node(data, this.head, null);
		if (this.isEmpty()) {
			this.#init(node);
		} else {
			this.head.prev = node;
			this.head = node;
		}
		this.length++;
		return true;
	}
	insert(data, index = 0) {
		if (index === 0) {
			return this.unShift(data);
		} else if (index === this.length) {
			return this.push(data);
		} else {
			const previous = this.itemAt(index - 1);
			if (!previous) {
				return false;
			}
			const current = previous.next;
			const node = new _Node(data, current, previous);
			previous.next = node;
			this.length++;
			return true;
		}
	}
	shift() {
		if (this.isEmpty()) return undefined;
		const temp = this.head;
		this.head = this.head.next;
		this.length--;
		if (this.size() === 0) {
			this.clear();
		}
		return temp.data;
	}
	push(data) {
		const node = new _Node(data, null, this.tail);
		if (this.isEmpty()) {
			this.#init(node);
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return true;
	}
	pop() {
		let temp;
		if (this.isEmpty()) return undefined;
		else if (this.size() === 1) {
			return this.shift();
		} else {
			temp = this.#deleteTail();
		}

		this.length--;
		temp.prev = null;
		return temp;
	}
	#deleteTail() {
		let temp = this.tail;
		const prev = this.tail.prev;
		prev.next = null;
		this.tail = prev;
		return temp;
	}
	setAt(data, index) {
		if (!this.isValidIndex(index)) {
			return false;
		} else {
			const node = this.itemAt(index);
			node.data = data;
		}
		return true;
	}
	itemAt(index) {
		if (!this.isValidIndex(index)) {
			return undefined;
		}
		if (index === this.length - 1) {
			return this.tail;
		}
		const middle = Math.floor(this.length / 2);
		let node = null;
		if (index < middle) {
			node = this.head;
			for (let i = 0; i <= index - 1; i++) {
				node = node.next;
			}
		} else {
			node = this.tail;
			for (let i = this.length - 1; i >= index + 1; i--) {
				node = node.prev;
			}
		}

		return node;
	}
	removeAt(index) {
		if (!this.isValidIndex(index)) {
			return false;
		}
		let current = this.head;
		if (index === 0) {
			return this.shift();
		} else if (index === this.length - 1) {
			return this.pop();
		} else {
			const prev = this.itemAt(index - 1);
			if (!prev) {
				return false;
			}
			current = prev.next;
			let next = current.next;
			prev.next = next;
			next.prev = prev;
			current.prev = null;
			current.next = null;
		}

		this.length--;
		return current;
	}
	getHead() {
		if (this.isEmpty()) return undefined;
		return this.head.data;
	}
	getTop() {
		if (this.isEmpty()) return undefined;
		return this.tail.data;
	}
	clear() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	isValidIndex(index) {
		index = parseInt(index);
		return typeof index === 'number' && 0 <= index && index <= this.length - 1;
	}
	#init(node) {
		this.head = node;
		this.tail = node;
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.length;
	}
	print() {
		if (this.isEmpty()) {
			console.log(`
DATA // ___
HEAD //  ___
TOP //  ___
SIZE // ${this.size()}
`);
			return;
		}
		let str = '';
		str += this.head.data;
		let current = this.head.next;
		while (current) {
			str += `=>${current.data}`;
			current = current.next;
		}
		console.log(`
DATA // ${str}
HEAD // ${this.head.data}
TOP // ${this.tail.data}
SIZE // ${this.size()}
`);
	}
}
