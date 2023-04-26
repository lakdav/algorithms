export default class CircularQueues {
	constructor(capability) {
		this.items = {};
		this.capability = capability;
		this.currentLength = 0;
		this.raer = -1;
		this.front = -1;
	}
	enqueue(item) {
		if (this.isFull()) {
			return false;
		}
		this.raer = (this.raer + 1) % this.capability;
		this.items[this.raer] = item;
		this.currentLength++;
		if (this.front === -1) {
			this.front = this.raer;
		}
		return this;
	}
	deQueue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const temp = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front + 1) % this.capability;
		this.currentLength--;
		if (this.isEmpty()) {
			this.front = -1;
			this.raer = -1;
		}
		return temp;
	}
	isFull() {
		return this.size() === this.capability;
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.currentLength;
	}
	setCapability(value) {
		this.capability = value;
	}
	toString() {
		if (this.isEmpty()) {
			return null;
		}
		return Object.values(this.items).toString();
	}
}
