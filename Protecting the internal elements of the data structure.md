# Protecting the internal elements of the data structure

## The underscore naming convention

```js
class Stack {
	constructor() {
		this._count = 0;
		this._items = {};
	}
}
```

## classes with scoped symbols

```js
const _items = Symbol('stackItems');
class Stack {
	constructor() {
		this[_items] = [];
	}
}
```

## ES2015 classes with WeakMap

```js
const items = new WeakMap();
class Stack {
	constructor() {
		items.set(this, []);
	}
	push(element) {
		const s = items.get(this);
		s.push(element);
	}
	pop() {
		const s = items.get(this);
		const r = s.pop();
		return r;
	}
}
```

## ECMAScript class field proposal

```js
class Stack {
	#count = 0;
	#items = {};
}
```
