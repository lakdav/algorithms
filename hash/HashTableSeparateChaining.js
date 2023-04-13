import { LinkedList } from '../list/index.js';
import { ValuePair, defaultToString } from '../utils/index.js';
import HashTable from './HashTable.js';

export default class HashTableSeparateChaining extends HashTable {
	constructor(toStrFn = defaultToString) {
		super(toStrFn);
	}
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			if (this.table[position] == null) {
				this.table[position] = new LinkedList();
			}
			this.table[position].push(new ValuePair(key, value));
			return true;
		}
		return false;
	}
	get(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
		}
		return undefined;
	}
	remove(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					// {1}
					linkedList.remove(current.element);
					if (linkedList.isEmpty()) {
						// {3}
						delete this.table[position];
					}
					return true;
				}
				current = current.next;
			}
		}
		return false;
	}
	toString() {
		if (this.isEmpty()) return '';
		const keys = this.keys();
		let objectString = '';
		for (let i = 0; i < keys.length; i++) {
			const linkedList = this.table[keys[i]];
			objectString += `${keys[i].padStart(3, ' ')} => ${linkedList.toString()} (${linkedList.size()})\n`;
		}
		return objectString;
	}
}
