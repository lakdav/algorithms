import { ValuePair, defaultToString } from '../utils/index.js';

export default class HashTable {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}
	loseloseHashCode(key) {
		if (typeof key === 'number') {
			return key;
		}
		const tableKey = this.toStrFn(key);
		let hash = 0;
		for (let i = 0; i < tableKey.length; i++) {
			hash += tableKey.charCodeAt(i);
		}
		return hash % 37;
	}
	djb2HashCode(key) {
		const tableKey = this.toStrFn(key); // {1}
		let hash = 5381; // {2}
		for (let i = 0; i < tableKey.length; i++) {
			// {3}
			hash = hash * 33 + tableKey.charCodeAt(i); // {4}
		}
		return hash % 1013; // {5}
	}
	hashCode(key) {
		return this.loseloseHashCode(key);
	}
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			this.table[position] = new ValuePair(key, value);
			return true;
		}
		return false;
	}
	get(key) {
		const valuePair = this.table[this.hashCode(key)];
		return valuePair == null ? undefined : valuePair.value;
	}
	remove(key) {
		const hash = this.hashCode(key);
		const valuePair = this.table[hash];
		if (valuePair != null) {
			delete this.table[hash];
			return true;
		}
		return false;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		const keys = this.keys();
		let objString = `${keys[0]} => ${this.table[keys[0]].toString()}\n`;
		for (let i = 1; i < keys.length; i++) {
			objString += `${keys[i]} => ${this.table[keys[i]].toString()}\n`;
		}
		return objString;
	}
	keys() {
		return Object.keys(this.table);
	}
	isEmpty() {
		return this.size === 0;
	}
	size() {
		return this.keys().filter((key) => this.table[key] != null).length;
	}
}
