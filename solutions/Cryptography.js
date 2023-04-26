const en = 'abcdefghijklmnopqrstuvwxyz';
export default class Cryptography {
	static CipherEncode(str, shift, alphabet = en) {
		let encode = '';
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			const idx = alphabet.indexOf(char);
			if (idx === -1) {
				encode += char;
				continue;
			}
			const rem = (idx + shift) % alphabet.length;
			encode += alphabet[rem];
		}
		return encode;
	}
}
