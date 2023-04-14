import { Queue } from '../queues/index.js';
import { Colors, initializeColor } from './utils.js';

export const breadthFirstSearch = (graph, startVertex, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	const queue = new Queue();
	const distances = {};
	const predecessors = {};
	queue.enqueue(startVertex);

	for (let i = 0; i < vertices.length; i++) {
		distances[vertices[i]] = 0;
		predecessors[vertices[i]] = null;
	}

	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = Colors.GREY;
		for (let i = 0; i < neighbors.length; i++) {
			const w = neighbors[i];
			if (color[w] === Colors.WHITE) {
				color[w] = Colors.GREY;
				distances[w] = distances[u] + 1;
				predecessors[w] = u;
				queue.enqueue(w);
			}
		}
		color[u] = Colors.BLACK;
		if (callback) {
			callback(u);
		}
	}
	console.log(distances, predecessors);
	return {
		distances,
		predecessors,
	};
};
