import { Deque } from './deque/index.js';
import { HashTable, HashTableSeparateChaining, LinearProbingHash } from './hash/index.js';
import { DoublyLinkedList, LinkedList, CircularLinkedList, SortedLinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { _Set } from './set/index.js';
import { Stack, StackArray, StackLinkedList } from './stacks/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

const hash = new LinearProbingHash();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');

console.log(hash.size());
console.log(hash.isEmpty());

console.log(hash.toString());
