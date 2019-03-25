const solution = arr => {

	let sumA = arr[0];
    let sumB = arr[arr.length-1];
    arr.splice(0, 1);
    arr.splice(arr.length - 1, 1);

	while (arr.length > 0) {
        // if (sumA <= sumB) {
		if (Math.abs(sumA+arr[0]) <= Math.abs(sumB+arr[arr.length - 1])) {
			sumA += arr[0];
			arr.splice(0, 1);
		} else {
			sumB += arr[arr.length - 1];
			arr.splice(arr.length - 1, 1);
		}
	}

	return Math.abs(sumB - sumA);
};

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([-3, -1, -2, -4, -3]));
console.log(solution([-10, -20, -30, -40, 100]));
console.log(solution([1000,-1000]));
