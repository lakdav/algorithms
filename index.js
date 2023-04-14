import { Deque } from './deque/index.js';
import { breadthFirstSearch } from './grap/breadthFirstSearch.js';
import { Graph } from './grap/index.js';
import { HashTable, HashTableSeparateChaining, LinearProbingHash } from './hash/index.js';
import { MaxHeap, MinHeap } from './heap/index.js';
import { DoublyLinkedList, LinkedList, CircularLinkedList, SortedLinkedList } from './list/index.js';
import { Queue } from './queues/index.js';
import { recursion, iterativeFactorial, factorial, iterativeFibonacci } from './recursion/index.js';
import { _Set } from './set/index.js';
import { Stack, StackArray, StackLinkedList } from './stacks/index.js';
import { BinarySearchTree, AVLTree } from './tree/index.js';
import { baseConverter, createMatrix, decimalToBinary } from './utils/index.js';
import palindromeChecker from './utils/palindromeChecker.js';

let graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
	graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
// console.log(graph.getVertices());
// console.log(graph.getAdjList());

// graph.breadthFirstSearch(graph, graph.getVertices()[0], printVertex);
const printVertex = (value) => console.log('Visited vertex: ' + value); // {15}
breadthFirstSearch(graph, graph.getVertices()[0], printVertex);
