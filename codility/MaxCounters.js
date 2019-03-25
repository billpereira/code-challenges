const solution = (n, arr) => {
	let arrCounter = [];
	arrCounter.length = n;
	let maxCounter = 0;
	let lastMax = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > n) {
			lastMax = maxCounter;
		} else {
			let currentMax = !arrCounter[arr[i] - 1]
				? lastMax
				: Math.max(lastMax, arrCounter[arr[i] - 1]);
			arrCounter[arr[i] - 1] = currentMax + 1;
			maxCounter = Math.max(arrCounter[arr[i] - 1], maxCounter);
		}
	}
	for (let i = 0; i < n; i++)
		if (arrCounter[i] < lastMax || !arrCounter[i]) arrCounter[i] = lastMax;

	return arrCounter;
};

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(
	solution(10, [2, 2, 11, 1, 1, 11, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 11])
);
console.log(solution(1, [2, 1, 1, 2, 1]));
