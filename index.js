import { Deque } from './deque/index.js';
import { LinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { Stack, StackArray } from './stacks/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.remove(10));
console.log(list.toString());

console.log(list.toString());
