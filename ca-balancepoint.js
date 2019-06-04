const balancePoint = arr => {
	let index = 1;
	let sumA = sumArr(arr.slice(0, index));
	let sumB = sumArr(arr.slice(index + 1));

	while (sumA !== sumB) {
		if (sumA === 0 || sumB === 0) return -1;

		index = index + 1;

		sumA = sumArr(arr.slice(0, index));
		sumB = sumArr(arr.slice(index + 1));
	}
	return index;
};

const sumArr = arr => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) sum = sum + arr[i];
	return sum;
};

console.log(balancePoint([2, 7, 4, 5, -3, 8, 9, -1]));
