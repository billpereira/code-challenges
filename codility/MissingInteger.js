const solution = arr => {
    if(arr.length<1) return 1
    let missing = [];
	for (let i = 0; i < arr.length; i++)
		if (arr[i] > 0) missing[arr[i] - 1] = true;
	if (missing.length < 1) return 1;
	for (let i = 0; i < missing.length; i++) if (!missing[i]) return i + 1;

	return missing.length+1;
};

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
