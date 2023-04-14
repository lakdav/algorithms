import { breadthFirstSearch } from './breadthFirstSearch.js';

export default class Graph {
	constructor(isDirected = false) {
		this.isDirected = isDirected;
		this.vertices = [];
		this.adjList = new Map();
	}
	addVertex(v) {
		if (!this.vertices.includes(v)) {
			this.vertices.push(v);
			this.adjList.set(v, []);
		}
	}
	addEdge(v, w) {
		if (!this.adjList.has(v)) {
			this.addVertex(v);
		}
		if (!this.adjList.has(w)) {
			this.addVertex(w);
		}
		this.adjList.get(v).push(w);
		if (!this.isDirected) {
			this.adjList.get(w).push(v);
		}
	}
	getVertices() {
		return this.vertices;
	}
	getAdjList() {
		return this.adjList;
	}
	BFS(graph, startVertex, callback) {
		let result = breadthFirstSearch(graph, startVertex, callback);
		return result;
	}
}
