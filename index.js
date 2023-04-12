import { Deque } from './deque/index.js';
import { DoublyLinkedList, LinkedList, CircularLinkedList, SortedLinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { _Set } from './set/index.js';
import { Stack, StackArray, StackLinkedList } from './stacks/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const list = new _Set();

list.add(1);
list.add(3);

console.log(list.size());
console.log(list.toString());
