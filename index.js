import { Deque } from './deque/index.js';
import { HashTable, HashTableSeparateChaining, LinearProbingHash } from './hash/index.js';
import { DoublyLinkedList, LinkedList, CircularLinkedList, SortedLinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { recursion, iterativeFactorial, factorial, iterativeFibonacci } from './recursion/index.js';
import { _Set } from './set/index.js';
import { Stack, StackArray, StackLinkedList } from './stacks/index.js';
import { BinarySearchTree, AVLTree } from './tree/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const tree = new AVLTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(20);
tree.insert(29);
tree.insert(49);
tree.insert(99);
