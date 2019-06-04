// Any digit followed by all zeros: 100, 90000
const allZeros = a => a == 0;

// Every digit is the same number: 1111
const allEqual = (a, b) => a == b;

// The digits are sequential, incementing†: 1234
const isSequentialI = (a, b) => (a == 9 ? b == 0 : b == a + 1);

// The digits are sequential, decrementing‡: 4321
const isSequentialD = (a, b) => b == a - 1;

// The digits are a palindrome: 1221 or 73837
const isPalindrome = (a, b) => (a === b ? true : false);
// The digits match one of the values in the awesomePhrases array
const isPresent = (a, arr) => {
	if (!typeof arr == 'string')
		return arr.reduce((arr, n) => (n == a ? true : arr), false);
	if (arr.indexOf(a) >= 0) return true;
	return false;
};

const isInteresting = (n, arr) => {
	if (n < 98) return 0;

	nString = n.toString();
	n1String = (n + 1).toString();
	n2String = (n + 2).toString();

	let checks = {
		isPalindrome: true,
		// isPresent: true,
		isSequentialD: true,
		isSequentialI: true,
		allEqual: true,
		allZeros: true
	};

	let valObj = {};
	valObj[nString] = JSON.parse(JSON.stringify(checks));
	valObj[n1String] = JSON.parse(JSON.stringify(checks));
	valObj[n2String] = JSON.parse(JSON.stringify(checks));

	for (let i = 0; i < nString.length; i++) {
		for (let key in valObj) {
			if (valObj[key].isPalindrome)
				if (!isPalindrome(key[i], key[key.length - 1 - i]))
					delete valObj[key].isPalindrome;
			if (i < nString.length - 1) {
				if (valObj[key].allEqual)
					if (!allEqual(key[i], key[i + 1])) delete valObj[key].allEqual;
				if (valObj[key].isSequentialD)
					if (!isSequentialD(key[i], key[i + 1]))
						delete valObj[key].isSequentialD;
				if (valObj[key].isSequentialI)
					if (!isSequentialI(key[i], key[i + 1]))
						delete valObj[key].isSequentialI;
				if (valObj[key].allZeros)
					if (!allZeros(key[i], key[i + 1])) delete valObj[key].allZeros;
			}
		}
	}

	for (let key in valObj) {
		if (!(JSON.stringify(valObj[key]) == JSON.stringify({})))
			if (key == nString) return 2;
			else return 1;
	}

	if (arr.indexOf(n) != -1) return 2;
	if (arr.indexOf(n + 1) != -1 || arr.indexOf(n + 2) != -1) return 1;

	return 0;
};

console.log(isInteresting(3, [1337, 256])); //0
console.log(isInteresting(1336, [1337, 256])); //1÷«‘“≠–º÷
console.log(isInteresting(1337, [1337, 256])); //2
console.log(isInteresting(11208, [1337, 256])); //0
console.log(isInteresting(11209, [1337, 256])); //1
console.log(isInteresting(321, [1337, 256])); //2
console.log(isInteresting(122, '123 is interesting')); //2
console.log(isInteresting(11211, [1337, 256])); //2
