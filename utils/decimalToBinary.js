import { Stack } from '../stacks/index.js';
/**
 * 10
 *
 * 10 % 2  0
 *
 */
export default function decimalToBinary(decNumber) {
	const remStack = new Stack();
	let rem;
	let binaryString = '';
	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}
	console.log(remStack.toString());
	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}
