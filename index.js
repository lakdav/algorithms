import { Deque } from './deque/index.js';
import { DoublyLinkedList, LinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { Stack, StackArray } from './stacks/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const list = new DoublyLinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.remove(10);
console.log(list.toString());
