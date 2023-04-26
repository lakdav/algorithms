export default class StringSolutions {
	static noDuplicates(str, lang_alfabet_length) {
		if (lang_alfabet_length && str.length > lang_alfabet_length) {
			return false;
		}
		let arr = [];
		for (let char of str) {
			if (arr.includes(char)) {
				return false;
			}
			arr.push(char);
		}
		return true;
	}
	static noDuplicates_nested_loops(str) {
		for (let i = 0; i < str.length; i++) {
			for (let j = i + 1; j < str.length; j++) {
				if (str[i] === str[j]) {
					return false;
				}
			}
		}
		return true;
	}
	static noDuplicates_sort(str) {
		const sortedChar = [...str].sort();
		for (let i = 0; i < sortedChar.length; i++) {
			if (sortedChar[i] === sortedChar[i + 1]) {
				return false;
			}
		}
		return true;
	}
	static isAnagrama_sort(s, t) {
		if (s.length !== t.length) return false;
		return s.split('').sort().join('') === t.split('').sort().join('');
	}
	static isAnagrama(s, t) {
		if (s.length !== t.length) {
			return false;
		}
		const sCharCounts = {};
		for (const sChar of s) {
			if (sChar in sCharCounts) {
				sCharCounts[sChar] += 1;
			} else {
				sCharCounts[sChar] = 1;
			}
		}
		for (const tChar of t) {
			if (tChar in sCharCounts === false || sCharCounts[tChar] === 0) {
				return false;
			} else {
				sCharCounts[tChar] -= 1;
			}
		}
		return true;
	}
	static replaceSpace(str, char = '') {
		return str.replaceAll(/\s/g, char);
	}
	static isPalindrom(str) {
		const str_no_space = str
			.trim()
			.toLowerCase()
			.replace(/(\s|-|\||—|!|\*|\(|\)|\^|\$|\%|#|\@|~|,|\.)/g, '');
		const middle = str_no_space.length / 2;
		const left = str_no_space.slice(0, Math.floor(middle));
		const right = [...str_no_space.slice(Math.ceil(middle))].reverse().join('');
		return left === right;
	}
	static isRotate(s1, s2) {
		return s1.length === s2.length && (s1 + s1).includes(s2);
	}
	static editDistaceOne(strX, strY) {
		if (strX.length === strY.length) {
			return replaceOne(strX, strY);
		} else if (Math.abs(strX.length - strY.length) === 1) {
			return insertOne(strX, strY);
		} else {
			return false;
		}
	}
	static charLengthEncoding(str) {
		let compressed = '';
		let count = 1;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === str[i + 1]) {
				count++;
			} else {
				compressed = compressed + str[i] + count;
				count = 1;
			}
		}
		return str.length < compressed.length ? str : compressed;
	}
	static reverse(str) {
		let reversed = '';
		for (let i = str.length - 1; i >= 0; i--) {
			reversed += str[i];
		}
		return reversed;
	}
	static steps(step, char = '#', offset = '') {
		let str = '';
		for (let i = 0; i < step; i++) {
			str += char;
			console.log(str.padEnd(4, offset));
			// let j = 0;
			// let str = '';
			// while (j < step) {
			// 	if (j <= i) {
			// 		str += '#';
			// 	} else {
			// 		str += '*';
			// 	}
			// 	j++;
			// }
		}
	}
	static pyramid(step, char = '#', offset = '*') {
		for (let i = 1; i < step; i++) {
			let pad = offset.repeat(step - i);
			let s = char.repeat(i * 2 - 1);
			console.log(pad + s + pad);
		}
	}
	static vowels(str) {
		let count = 0;
		str.replaceAll(/(a|e|i|o|u|)/gi, (char) => {
			if (char) {
				count++;
			}
		});
		return count;
	}
}

function replaceOne(x, y) {
	let dif = 0;
	for (let i = 0; i < x.length; i++) {
		if (x[i] !== y[i]) {
			dif += 1;
		}
		if (dif > 1) {
			return false;
		}
	}
	return true;
}
function insertOne(x, y) {
	if (x.length > y.length) {
		[x, y] = [y, x];
	}
	let xIdx = 0;
	let yIdx = 0;
	for (let i = 0; i < y.length; i++) {
		if (x[xIdx] !== y[yIdx]) {
			if (yIdx !== xIdx) {
				return false;
			}
			yIdx++;
		} else {
			xIdx++;
			yIdx++;
		}
	}
	return true;
}
