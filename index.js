import { Deque } from './deque/index.js';
import { DoublyLinkedList, LinkedList, CircularLinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { Stack, StackArray } from './stacks/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const list = new CircularLinkedList();
list.insert(1, 0);
list.insert(2, 1);
list.insert(10, 1);
list.insert(10, 1);
list.insert(10, 1);
list.insert(200, 4);
list.removeAt(0);
console.log(list.toString());
