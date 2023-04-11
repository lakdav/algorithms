// creating array

let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
daysOfWeek = [];
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// size

daysOfWeek.length;

// Accessing elements and iterating an array
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log('---');
for (let i = 0; i < daysOfWeek.length; i++) {
	console.log(daysOfWeek[i]);
}
console.log('---');
const fibonacci = (n) => {
	if (n < 0) return;
	if (n === 0) return 0;
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr.toString();
};
console.log('fibonacci of 20 =>', fibonacci(20));
console.log('---');

//Adding elements
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Adding elements to the end //*push
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

// Inserting an element in the first position //*unshift
const insertFirstPosition = (arr, value) => {
	for (let i = arr.length; i >= 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = value;
};
insertFirstPosition(numbers, -1);

numbers.unshift(-2);
numbers.unshift(-4, -3);

//Removing elements
//Removing an element from the end of the array  //*pop()
numbers.pop();
// Removing an element from the first position  //*shift()
const removeFirstPosition = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length = arr.length - 1;
};
removeFirstPosition(numbers);

numbers.shift();

// Adding and removing elements from a specific position //*splice

numbers.splice(2, 3); //delete from 2 pos   3 count of elemnets
numbers.splice(2, 0, 0, 1, 2); //add from 2 pos  0, 1, 2

// @@iterator
const iterator = numbers[Symbol.iterator]();
let result = iterator.next();
console.log('---');
while (!result.done) {
	console.log(result.value);
	result = iterator.next();
}
console.log('---');
console.log(numbers.entries().next());
console.log(numbers.values().next());
console.log(numbers.keys().next());

//  Array.from
let copy = [...numbers];
const link = numbers;
console.log(Object.is(copy, numbers)); //false
console.log(Object.is(link, numbers)); //true

copy = Array.from(numbers);
console.log(Object.is(copy, numbers)); //false

const multipledCopy = Array.from(numbers, (x) => x * 2);
console.log('multipled copy', multipledCopy);

//fill
copy.fill(0);
copy.fill(1, Math.floor((copy.length - 1) / 2));
copy.fill(3, 0, Math.floor((copy.length - 1) / 2));
console.log(copy);
