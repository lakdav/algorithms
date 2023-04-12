import { Deque } from './deque/index.js';
import { DoublyLinkedList, LinkedList, CircularLinkedList, SortedLinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { Stack, StackArray } from './stacks/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const list = new SortedLinkedList();
list.insert(1);
list.insert(1);
list.insert(10);
list.insert(2);
list.insert(3);
console.log(list.toString());
