export default class StacksInArray {
	constructor(length, capacity) {
		this.l = length;
		this.capacity = capacity;
		this.values = new Array(length * capacity).fill(undefined);
		this.sizes = new Array(length).fill(0);
	}
	push(stackNum, value, report) {
		if (this.isFull(stackNum) || stackNum > this.l - 1) {
			this.report(`stack is full or stackNum is greater then this.capacity`, report);
			return false;
		}

		this.sizes[stackNum]++;
		this.values[this.indexOfTop(stackNum)] = value;
	}
	pop(stackNum) {
		if (this.isEmpty(stackNum)) {
			return false;
		}
		let topIndex = this.indexOfTop(stackNum);
		let removedValue = this.values[topIndex];
		this.values[topIndex] = undefined;
		this.sizes[stackNum]--;
		return removedValue;
	}
	peek(stackNum) {
		if (this.isEmpty(stackNum) || stackNum > this.l - 1) {
			return undefined;
		}

		return this.values[this.indexOfTop(stackNum)];
	}
	get(stackNum) {
		const arr = [];
		const offset = stackNum * this.capacity;
		for (let i = offset; i <= offset + this.capacity; i++) {
			if (!this.values[i]) break;
			arr.push(this.values[i]);
		}
		return arr;
	}
	indexOfTop(stackNum) {
		const offset = stackNum * this.capacity;
		const size = this.sizes[stackNum];
		return offset + size - 1;
	}
	isEmpty(stackNum) {
		if (!stackNum) {
			return this.sizes.map((size) => size === 0).join(':');
		}
		return this.size(stackNum) === 0;
	}
	isFull(stackNum) {
		if (!stackNum) {
			return this.sizes.map((size) => size === this.capacity).join(':');
		}
		return this.size(stackNum) === this.capacity;
	}

	size(stackNum) {
		if (!stackNum) {
			return this.sizes.join(':');
		}
		return this.sizes[stackNum];
	}
	report(msg, report) {
		if (!report) return;
		this.msg = msg;
	}
	print() {
		console.log(
			`
isFull => ${this.isFull()}
isEmpty => ${this.isEmpty()}
size => ${this.size()}
msg => ${this.msg ? this.msg : '----'}
        `,
		);
	}
}
