export const removeDuplicates = (head) => {
	let current = head;
	let previous = null;
	const map = {};
	while (current) {
		if (map[current.element]) {
			previous.next = current.next;
		} else {
			map[current.element] = true;
			previous = current;
		}
		current = current.next;
	}
};
export const valueNthFromEnd = (list, n) => {
	if (n > list.count || n <= 0) return undefined;
	let slow = list.head;
	let fast = list.head;
	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}
	while (fast) {
		slow = slow.next;
		fast = fast.next;
	}
	return slow.element;
};
